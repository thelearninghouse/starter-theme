<?php

namespace Pusher\Handlers;

use Pusher\Actions\PluginWasInstalled;
use Pusher\Commands\InstallPlugin as InstallPluginCommand;
use Pusher\Dashboard;
use Pusher\Git\RepositoryFactory;
use Pusher\Log\Logger;
use Pusher\Plugin;
use Pusher\Pusher;
use Pusher\Storage\PluginRepository;
use Pusher\WordPress\PluginUpgrader;

class InstallPlugin
{
    /**
     * @var Pusher
     */
    private $pusher;

    /**
     * @var PluginRepository
     */
    private $plugins;

    /**
     * @var PluginUpgrader
     */
    private $upgrader;

    /**
     * @var RepositoryFactory
     */
    private $repositoryFactory;

    /**
     * @param Pusher $pusher
     * @param PluginRepository $plugins
     * @param PluginUpgrader $upgrader
     * @param RepositoryFactory $repositoryFactory
     */
    public function __construct(Pusher $pusher, PluginRepository $plugins, PluginUpgrader $upgrader, RepositoryFactory $repositoryFactory)
    {
        $this->pusher = $pusher;
        $this->plugins = $plugins;
        $this->upgrader = $upgrader;
        $this->repositoryFactory = $repositoryFactory;
    }

    public function handle(InstallPluginCommand $command)
    {
        $plugin = $this->pusher->make('Pusher\Plugin');

        $repository = $this->repositoryFactory->build(
            $command->type,
            $command->repository
        );

        if ($command->private and $this->pusher->hasValidLicenseKey()) {
            $repository->makePrivate();
        }

        $repository->setBranch($command->branch);
        $plugin->setRepository($repository);
        $plugin->setSubdirectory($command->subdirectory);

        $command->dryRun ?: $this->upgrader->installPlugin($plugin);

        // Refresh plugin
        $plugin = $this->plugins->fromSlug($plugin->getSlug());

        $plugin->setRepository($repository);
        $plugin->setPushToDeploy($command->ptd);
        $plugin->setSubdirectory($command->subdirectory);

        $this->plugins->store($plugin);

        do_action('wppusher_plugin_was_installed', new PluginWasInstalled($plugin));
    }
}
