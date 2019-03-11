<?php

namespace Pusher\Handlers;

use Pusher\Actions\ThemeWasInstalled;
use Pusher\Commands\InstallTheme as InstallThemeCommand;
use Pusher\Dashboard;
use Pusher\Git\RepositoryFactory;
use Pusher\Log\Logger;
use Pusher\Pusher;
use Pusher\Storage\ThemeRepository;
use Pusher\Theme;
use Pusher\WordPress\ThemeUpgrader;

class InstallTheme
{
    /**
     * @var Pusher
     */
    private $pusher;

    /**
     * @var RepositoryFactory
     */
    private $repositoryFactory;

    /**
     * @var ThemeRepository
     */
    private $themes;

    /**
     * @var ThemeUpgrader
     */
    private $upgrader;

    /**
     * @param Pusher $pusher
     * @param RepositoryFactory $repositoryFactory
     * @param ThemeRepository $themes
     * @param ThemeUpgrader $upgrader
     */
    public function __construct(Pusher $pusher, RepositoryFactory $repositoryFactory, ThemeRepository $themes, ThemeUpgrader $upgrader)
    {
        $this->pusher = $pusher;
        $this->repositoryFactory = $repositoryFactory;
        $this->themes = $themes;
        $this->upgrader = $upgrader;
    }

    public function handle(InstallThemeCommand $command)
    {
        $theme = new Theme;

        $repository = $this->repositoryFactory->build(
            $command->type,
            $command->repository
        );

        if ($command->private and $this->pusher->hasValidLicenseKey()) {
            $repository->makePrivate();
        }

        $repository->setBranch($command->branch);

        $theme->setRepository($repository);
        $theme->setSubdirectory($command->subdirectory);

        $command->dryRun ?: $this->upgrader->installTheme($theme);

        if ($command->subdirectory) {
            $slug = end(explode('/', $command->subdirectory));
        } else {
            $slug = $repository->getSlug();
        }

        $theme = $this->themes->fromSlug($slug);
        $theme->setRepository($repository);
        $theme->setPushToDeploy($command->ptd);
        $theme->setSubdirectory($command->subdirectory);

        $this->themes->store($theme);

        do_action('wppusher_theme_was_installed', new ThemeWasInstalled($theme));
    }
}
