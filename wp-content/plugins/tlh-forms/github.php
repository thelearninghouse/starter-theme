<?php
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Signer\Rsa\Sha256;
use Http\Adapter\Guzzle6\Client as GuzzleClient;
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

function checkToken() {
  global $school;
  global $github_token;

  $github = new Github\Client($builder, 'machine-man-preview');
  $github->authenticate($github_token, null, Github\Client::AUTH_HTTP_TOKEN);

  try{
    $formsContents = $github->api('repo')->contents()->show('thelearninghouse', 'marketing-forms', $school, $reference);
    // You have form contents
  } catch(\RuntimeException $e) {
    // Do Nothing
    // You should probably warn the user that they need to reload the page to refresh token
    return;
  }

  if ($formsContents) {
    $saved_templates = get_option('repo_form_templates');

    $githubTemplatesArray = array();
    foreach ( $formsContents as $item ) {
      $name = $item['name'];
      array_push($githubTemplatesArray, $name);
    }
    update_option('repo_form_templates', $githubTemplatesArray);
    return returnGithubData($formsContents);

  } else {
    // I don't think this is ever loading anymore - possibly can be removed
    $saved_templates = get_option('repo_form_templates');
    if ($saved_templates) {
      return $saved_templates;
    }
  }
}

function getNewToken() {
  global $school;
  global $githubAppId;
  global $privateKey;
  global $installationId;

  // VERY IMPORTANT TO NOT THROW ERRORS AND MAKE UNUSABLE
  if (!$school || !$githubAppId || !$privateKey || !$installationId) {
    return;
  }
  $issuedAt   = time();
  $notBefore  = $issuedAt + 10;             //Adding 10 seconds
  $expire     = $notBefore + 60;            // Adding 60 seconds
  $builder = new Github\HttpClient\Builder(new GuzzleClient());
  $github = new Github\Client($builder, 'machine-man-preview');
  $jwt = (new Builder)
     ->setIssuer($githubAppId)
     ->setId('4f1g23a12aa', true) // Configures the id (jti claim), replicating as a header item
     ->setIssuedAt($issuedAt)
     // ->setNotBefore($notBefore) // Configures the time that the token can be used (nbf claim)
     ->setExpiration($expire)
     // ->set('uid', 1) // Configures a new claim, called "uid"
     ->sign(new Sha256(), new Key($privateKey))
     ->getToken();

  $github->authenticate($jwt, null, Github\Client::AUTH_JWT);
  $token = $github->api('integrations')->createInstallationToken($installationId);

  update_option('github_token', $token['token']);
}

function returnGithubData($formsContents) {
  $templatesDataArray = array();

  foreach ( $formsContents as $item ) {
    $name = $item['name'];
    array_push($templatesDataArray, $name);
	}
  return $templatesDataArray;
}

getNewToken();


?>
