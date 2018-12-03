<?php

// If this file is called directly, abort.
if ( ! defined('WPINC')) {
    die;
}

?><h2>Install New Plugin</h2>

<form action="" method="POST">
    <?php wp_nonce_field('install-plugin'); ?>
    <input type="hidden" name="wppusher[action]" value="install-plugin">
    <table class="form-table">
        <tbody>
            <tr>
                <th scope="row">
                    <label>Repository host</label>
                </th>
                <td>
                    <input id="radio-gh" name="wppusher[type]" type="radio" value="gh" checked> <label for="radio-gh"><i class="fa fa-github"></i> GitHub &nbsp;</label>
                    <input id="radio-bb" name="wppusher[type]" type="radio" value="bb" <?php if (isset($_POST['wppusher']['type']) && $_POST['wppusher']['type'] === 'bb') echo 'checked'; ?>> <label for="radio-bb"><i class="fa fa-bitbucket"></i> Bitbucket &nbsp;</label>
                    <input id="radio-gl" name="wppusher[type]" type="radio" value="gl" <?php if (isset($_POST['wppusher']['type']) && $_POST['wppusher']['type'] === 'gl') echo 'checked'; ?>> <label for="radio-gl"><i class="fa fa-gitlab"></i> GitLab &nbsp;</label>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label>Plugin repository</label>
                </th>
                <td>
                    <input id="wppusher-repository-name" name="wppusher[repository]" type="text" class="regular-text" value="<?php echo (isset($_POST['wppusher']['repository'])) ? $_POST['wppusher']['repository'] : ''; ?>">
                    <button id="pick-from-gh-btn" class="button button-default" onclick="window.open('https://cloud.wppusher.com/repositories/github', 'WP Pusher Cloud', 'height=800,width=1100'); document.getElementById('wppusher-repository-name').focus(); document.getElementById('wppusher-repository-name').placeholder = 'Now, paste it here!'; return false;"><i class="fa fa-github"></i>&nbsp; Pick from GitHub</button>
                    <p class="description">Example: wppusher/wppusher-plugin</p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label>Repository branch</label>
                </th>
                <td>
                    <input name="wppusher[branch]" type="text" class="regular-text" placeholder="master" value="<?php echo (isset($_POST['wppusher']['branch'])) ? $_POST['wppusher']['branch'] : ''; ?>">
                    <p class="description">Defaults to <strong>master</strong> if left blank</p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label>Repository subdirectory</label>
                </th>
                <td>
                    <input name="wppusher[subdirectory]" type="text" class="regular-text" placeholder="Optional" value="<?php echo (isset($_POST['wppusher']['subdirectory'])) ? $_POST['wppusher']['subdirectory'] : ''; ?>">
                    <p class="description">Only relevant if your plugin resides in a subdirectory of the repository.</p>
                    <p class="description">Example: <strong>awesome-plugin</strong> or <strong>plugins/awesome-plugin</strong></p>
                </td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td>
                    <label><input type="checkbox" name="wppusher[private]" <?php if (isset($_POST['wppusher']['private'])) echo 'checked'; ?> <?php echo ($hasValidLicense) ? null : 'disabled'; ?>> <i class="fa fa-lock" aria-hidden="true"></i> Repository is private</label>
                    <?php if ( ! $hasValidLicense) { ?>
                        <p class="description">You need a license to use private repositories. <a href="https://wppusher.com/?utm_source=plugin&utm_medium=install_package#pricing">Get one here.</a></p>
                    <?php } ?>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label></label>
                </th>
                <td>
                    <label><input type="checkbox" name="wppusher[ptd]" <?php if (isset($_POST['wppusher']['ptd'])) echo 'checked'; ?>> <i class="fa fa-refresh" aria-hidden="true"></i> Push-to-Deploy</label>
                    <p class="description">Automatically update on every push. Read about setup <a target="_blank" href="http://docs.wppusher.com/article/24-automatic-updates-with-push-to-deploy">here</a>.</p>
                </td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td>
                    <label><input type="checkbox" name="wppusher[dry-run]" <?php if (isset($_POST['wppusher']['dry-run'])) echo 'checked'; ?>> <i class="fa fa-link" aria-hidden="true"></i> Link installed plugin</label>
                    <p class="description">Let WP Pusher take over an already installed plugin</p>
                    <p class="description">Folder name <strong>must</strong> have the same name as repository</p>
                </td>
            </tr>
        </tbody>
    </table>
    <?php submit_button('Install plugin'); ?>
</form>

<script>
    var ghBtn = document.getElementById('pick-from-gh-btn');
    var ghRadio = document.getElementById('radio-gh');
    var bbRadio = document.getElementById('radio-bb');
    var glRadio = document.getElementById('radio-gl');

    ghRadio.addEventListener('click', function(e) {
        ghBtn.style.display = 'inline-block';
    });
    bbRadio.addEventListener('click', function(e) {
        ghBtn.style.display = 'none';
    });
    glRadio.addEventListener('click', function(e) {
        ghBtn.style.display = 'none';
    });
</script>
