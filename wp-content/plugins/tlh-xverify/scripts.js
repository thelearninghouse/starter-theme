var servicetimeout = 10000;
var apiKey = '';
var affiliateid = '';
var subaffiliateid = '';
var domainname = '';
var emailcallstatus = false;
var jquerynoconflictinstance = false;
var phonecallstatus = false;
var formautosubmit = false;
var subscribeServices = '';
var baseUrl = 'www.xverify.com';
var orgUrl = baseUrl;
var serverURL = baseUrl + "/services/";
var loaderImagePath =  baseUrl + "/images/loader.gif";
var myElementArray = Array();
var emailtimeout = 10000;
var phonetimeout = 10000;
var is_mobile = false;
var mistake_words= new Array();
var bypass_email = 0;
var email_element = '';

function getInputElementsByAttributeFromAllForms(attributeName, attributeValue,fieldType){
	var $ = getJQueryInstance();
	fieldType = typeof fieldType !== 'undefined' ? fieldType : 'text';

	if(attributeName == 'class')
		return $('form :input[type="'+ fieldType +'"][' + attributeName + '*="' + attributeValue + '"]');

	return $('form :input[type="'+ fieldType +'"][' + attributeName + '="' + attributeValue + '"]');
}

function getInputElementsByAttributeFromSpecficForms(attributeName, attributeValue, formname){
	var $ = getJQueryInstance();
	if(attributeName == 'class')
		return $(formname).find('input[type="text"][' + attributeName + '*="' + attributeValue + '"]');
	return $(formname).find('input[type="text"][' + attributeName + '="' + attributeValue + '"]');
}
function initalizeServicesURL(){
	var jsHost = 'http://';
	if(document.location.protocol == 'https:')
	{
		jsHost = 'https://';
	}
	if(orgUrl != baseUrl) return ;
	baseUrl = jsHost + baseUrl;
	serverURL = jsHost + serverURL;
	loaderImagePath = jsHost + loaderImagePath;
}
function initalizeDomainnameParameters(){
	var $ = getJQueryInstance();
	hostname = document.location.hostname;
	user_xverify_my_domain = $('#user_xverify_my_domain').val();
	if($.trim(user_xverify_my_domain) !='' && user_xverify_my_domain != undefined)
	{
		domainname = $.trim(user_xverify_my_domain);
	}
	else if( $.trim(hostname) !='' && hostname != undefined)
	{
		//domainname = $.trim(hostname);
	}
}
function initalizeAffiliatesParameters(){
	var $ = getJQueryInstance();
	var allVars = getUrlVars();
	v1 = allVars['v1'];
	v2 = allVars['v2'];

	if( $.trim(v1) !='' && v1 != undefined)
	{
		affiliateid = $.trim(v1);

		if( $.trim(v2) !='' && v2 != undefined)
			subaffiliateid = v2;
	}
}

function getUrlVars()
{
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	{
	  hash = hashes[i].split('=');
	  vars.push(hash[0]);
	  vars[hash[0]] = hash[1];
	}
	return vars;
}

function checkServiceExist(serviceName){
	var serviceStr = subscribeServices;
	var serviceArray = serviceStr.split(",");

	var return_value = false;
	for(var i=0; i<serviceArray.length; i++)
	{
	  if(serviceName == serviceArray[i])
	  {
		return_value = true;
		break;
	  }
	}
	return return_value;

}
function bindAffilateInputFields(){

	//----------------- get Affiliate Input field value starts here-------------------------//
	var inputFields = getInputElementsByAttributeFromAllForms('id', 'v1','hidden');

	if(affiliateid == '' && inputFields.length > 0)
	{
		affiliateid = inputFields.val();
	}

	if(affiliateid == '')
	{
		var inputFields = getInputElementsByAttributeFromAllForms('name', 'v1','hidden');
	}

	if(affiliateid == '' && inputFields.length > 0)
	{
		affiliateid = inputFields.val();
	}

	if(affiliateid == '')
	{
		var inputFields = getInputElementsByAttributeFromAllForms('class', 'xverify_v1','hidden');
	}

	if(affiliateid == '' && inputFields.length > 0)
	{
		affiliateid = inputFields.val();
	}

	//----------------- Affiliate Input field value ends here-------------------------//

	//----------------- get Sub Affiliate Input field value starts here-------------------------//
	var inputFields = getInputElementsByAttributeFromAllForms('id', 'v2','hidden');

	if(subaffiliateid == '' && inputFields.length > 0)
	{
		subaffiliateid = inputFields.val();
	}

	if(subaffiliateid == '')
	{
		var inputFields = getInputElementsByAttributeFromAllForms('name', 'v2','hidden');
	}

	if(subaffiliateid == '' && inputFields.length > 0)
	{
		subaffiliateid = inputFields.val();
	}
	if(subaffiliateid == '')
	{
		var inputFields = getInputElementsByAttributeFromAllForms('class', 'xverify_v2','hidden');
	}

	if(subaffiliateid == '' && inputFields.length > 0)
	{
		subaffiliateid = inputFields.val();
	}

	//----------------- Sub Affiliate Input field value ends here-------------------------//
}
function bindXverifyServiceOnInputFields(formsubmit,inputelement,instance)
{
	if(typeof formsubmit === 'undefined')
	{
		bindRequiredInputFields(instance);
	}
	else if(formsubmit == true)
	{
		formautosubmit = true;
		if(typeof inputelement !== 'undefined')
		{
			email_element = inputelement;
		}
		bindRequiredInputFields(instance);
	}
	else if(formsubmit == false)
	{
		if(typeof inputelement !== 'undefined')
		{
			email_element = inputelement;
		}
		bindRequiredInputFields(instance);
	}
}
function bindRequiredInputFields(instance)
{
	if(instance == undefined || instance == 1)
	{
		jquerynoconflictinstance = true;
	}
	var $ = getJQueryInstance();
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $( window ).width() <= 480 ) {
		is_mobile = true;

	}
	initializeVariables();
	initializeTimeOuts();
	initalizeServicesURL();
	initalizeAffiliatesParameters();
	initalizeDomainnameParameters();
	bindAffilateInputFields();
	bindRequiredInputFieldsByIdOrName();
	//bindRequiredInputFieldsByClass();
}
function initializeVariables()
{
	var $ = getJQueryInstance();
	//apiKey = $.getApiKey();
	//subscribeServices = $.getServices();
	apiKey = "learninghouse";
	subscribeServices = "email,phone"
}

function initializeTimeOuts()
{
	var gettimeoutstring = '';
	var $ = getJQueryInstance();
	functionstatus  = $.isFunction($.getServicesTimeOut);
	if(functionstatus)
	{
		gettimeoutstring = $.getServicesTimeOut();
		var serviceTimeOutArray = gettimeoutstring.split(",");
		var timeoutvalue = '';
		for(var i=0; i<serviceTimeOutArray.length; i++)
		{
			timeoutvalue = serviceTimeOutArray[i].split(":");
			if(timeoutvalue[0] == 'email')
			{
				emailtimeout = timeoutvalue[1] * 1000;
				emailtimeout = emailtimeout + 2000;
			}
			else if(timeoutvalue[0] == 'phone')
			{
				phonetimeout = timeoutvalue[1] * 1000;
				phonetimeout = phonetimeout + 2000;
			}

		}
	}
}
function bindRequiredInputFieldsByIdOrName(){

	if(checkServiceExist('email'))
	{
		var inputElements = getInputElementsByAttributeFromAllForms("id", "email");
		inputElements.bind('blur', emailChangeHandler);

		inputElements = getInputElementsByAttributeFromAllForms("name", "email");
		inputElements.unbind('blur', emailChangeHandler);
		inputElements.bind('blur', emailChangeHandler);

		inputElements = getInputElementsByAttributeFromAllForms("id", "email",'email');
		inputElements.unbind('blur', emailChangeHandler);
		inputElements.bind('blur', emailChangeHandler);

		inputElements = getInputElementsByAttributeFromAllForms("name", "email",'email');
		inputElements.unbind('blur', emailChangeHandler);
		inputElements.bind('blur', emailChangeHandler);

		if(email_element != '')
		{
			inputElements = getInputElementsByAttributeFromAllForms("id", email_element);
			inputElements.unbind('blur', emailChangeHandler);
			inputElements.bind('blur', emailChangeHandler);

			inputElements = getInputElementsByAttributeFromAllForms("name", email_element);
			inputElements.unbind('blur', emailChangeHandler);
			inputElements.bind('blur', emailChangeHandler);
		}

	}

	if(checkServiceExist('phone'))
	{
		var inputElements = getInputElementsByAttributeFromAllForms("name", "phone");
		inputElements.bind('blur', phoneChangeHandler);

		var inputElements = getInputElementsByAttributeFromAllForms("id", "phone");
		inputElements.unbind('change', phoneChangeHandler);
		inputElements.bind('change', phoneChangeHandler);
	}
}


/****************************************** Get value from specific form via field *****************************************/
function getFiledValueByForm(form, fieldname)
{
	value = ''
	fieldElement = getInputElementsByAttributeFromSpecficForms('id',fieldname,form)
	if(fieldElement.length == 0)
	{
		fieldElement = getInputElementsByAttributeFromSpecficForms('name',fieldname,form)
		if(fieldElement.length == 0)
		{
			fieldclass = 'xverify_' + fieldname;
			fieldElement = getInputElementsByAttributeFromSpecficForms('class',fieldclass,form)
		}
	}

	if(fieldElement.length > 0)
	{
		value = fieldElement.val();
	}

	return value;
}


function getFiledElementByForm(form, fieldname)
{
	value = ''
	fieldElement = getInputElementsByAttributeFromSpecficForms('id',fieldname,form)
	if(fieldElement.length == 0)
	{
		fieldElement = getInputElementsByAttributeFromSpecficForms('name',fieldname,form)
		if(fieldElement.length == 0)
		{
			fieldclass = 'xverify_' + fieldname;
			fieldElement = getInputElementsByAttributeFromSpecficForms('class',fieldclass,form)
		}
	}
	return fieldElement;
}
/****************************************** Get value from specific form via field *****************************************/

/******************************************* Email Change Handler Function ********************************/

function emailChangeHandler(event){
	var $ = getJQueryInstance();
	var field = $(event.target);

	console.log(field); //tlh

	var serviceStatus = field.attr('service');

	console.log(serviceStatus); //tlh

	if(serviceStatus == 0)
	{
		return;
	}

	var email = field.val();

	console.log(email); //tlh

	var parentForm = this.form;
	var tooltip = field;

	console.log(tooltip); //tlh

	var submitBtn = $(parentForm).find("input[type='submit']");

	tClassName = field; //tlh

	console.log(tClassName); //tlh

	// tlh
	if (!$('#emailError').length){
		$(tClassName).after('<div class="FormError" id="emailError"></div>');
    	}

	$(parentForm).attr('state','proccess');
	if(submitBtn.length == 0)
	{
		submitBtn = $(parentForm).find("input[type='image']");
	}
	if(submitBtn.length == 0)
	{
		submitBtn = $(parentForm).find("button[type='submit']");
	}
	submitBtn.attr('disabled', 'true');
	if(checkEmailSyntax(email))
	{
		var spellCheck = checkDomainSpell(email);
		if( spellCheck == true)
		{
			if(is_mobile == true){
				field.css({ 'border' : '', 'border-color' : '' });
				//tlh
				$("#emailError").html("Verifying...");
			}
			else
			{
				//tlh
				$("#emailError").html("Verifying... <img src='"+ loaderImagePath +"' style='vertical-align:middle'/>"); //tlh

			}
		}
		else
		{
			//xverifySuggestEmail(email,spellCheck,tooltip,submitBtn,parentForm,field);
			return;
		}
	}
	else if($.trim(email) == '')
	{
		if(is_mobile == true){
			field.css({'border':'2px solid #F00'});
			//tlh
			$("#emailError").html("Input required");
			addTLHFormError(tClassName);
		}
		else
		{
			//tlh
			$("#emailError").html("Please enter email address");
			addTLHFormError(tClassName);
		}
		return;
	}
	else
	{

		tClassName = field;

		if(is_mobile == true){
			field.css({'border':'2px solid #F00'});
			//tlh
			$("#emailError").html("Invalid Syntax");
			addTLHFormError(tClassName);
		}
		else
		{

			$("#emailError").html("Your email address is in the incorrect format"); //tlh
			addTLHFormError(tClassName);
		}
		return;
	}
	emailServiceRequest(email,tooltip,submitBtn,parentForm,field );
}
function checkDomainSpell(email)
{
	emaildomainname = getDomainNameFromEmail(email);
	if(mistake_words[emaildomainname] == undefined)
	{
		return true;
	}
	else
	{
		newemail = email.replace(emaildomainname,mistake_words[emaildomainname]);
		return newemail;
	}
}


function xverifyByPassEmail(email,tooltip,submitBtn,parentForm,field,message,valid_message,invalid_message,call_function){ //tlh need to remove if not going to use
	var $ = getJQueryInstance();
	var html = "<div align = 'left'><b>" + message +"</b> &nbsp;&nbsp;<a href='javascript:' alt='Yes' class='xverify_suggest_email' >"+ valid_message +"</a>&nbsp;&nbsp; OR &nbsp;&nbsp;<a href='javascript:' alt='No' class='xverify_suggest_email' >"+ invalid_message +"</a></div>";

		$(".xverify_suggest_email").click(function() {
			email_alt = $(this).attr('alt');
			if(email_alt == 'Yes')
			{
				field.unbind('change');
				service_captcha["email"] = 0;
				//myElementArray[tooltip.tooltip('option').tip] = 0;
				$(parentForm).removeAttr('state');
				submitBtn.removeAttr('disabled');
				//$( tClassName).tooltip( "disable" );

				if(jQuery.trim(call_function) != '' )
				{
					functionstatus  = $.isFunction(window[call_function]);
					if(functionstatus)
					{
						var callbackfunction_args = []
						callbackfunction_args.status = 2;
						callbackfunction_args.responsecode = 2;
						window[call_function](callbackfunction_args);
					}
				}


			}
			else if(email_alt == 'No')
			{
				service_captcha["email"] = 0;
				$(parentForm).removeAttr('state');
			}
			return false;
		});
}

function xverifyByPassPhone(tooltip,bypass_message,message_valid,message_invalid,submitBtn,parentForm,call_function){  //tlh need to remove if not using
	var $ = getJQueryInstance();
	var html = "<div align = 'left'><b>" + bypass_message +"</b> <br> <a href='javascript:' alt='Yes' class='xverify_bypass_phone' >"+ message_valid +"</a>&nbsp;&nbsp; OR &nbsp;&nbsp;<a href='javascript:' alt='No' class='xverify_bypass_phone' >"+ message_invalid +"</a></div>";

	$(".xverify_bypass_phone").click(function() {
			phone_alt = $(this).attr('alt');

			if(phone_alt == 'Yes')
			{
				service_captcha["phone"] = 0;
				$(parentForm).removeAttr('state');
				submitBtn.removeAttr('disabled');
				if(jQuery.trim(call_function) != '' )
				{
					functionstatus  = $.isFunction(window[call_function]);
					if(functionstatus)
					{
						var callbackfunction_args = []
						callbackfunction_args.status = 2;
						callbackfunction_args.responsecode = 2;
						window[call_function](callbackfunction_args);
					}
				}
			}
			else if(phone_alt == 'No')
			{
				service_captcha["phone"] = 0;
				$(parentForm).removeAttr('state');
			}
			return false;
	});


}

/******************************************* Email Change Handler Function ********************************/

function formButtonCheckHandler(tooltip,submitBtn,parentForm)
{
	var $ = getJQueryInstance();
	for (var key in myElementArray)
		{
			if(myElementArray[key] == 1)
				{
					if(submitBtn.length > 0)
					{
						submitBtn.attr('disabled', 'true');
					}

					$(parentForm).attr('state','proccess');
					break;
				}
		}
}
/******************************************* Phone Change Handler Function ********************************/
function phoneChangeHandler(event,phoneType){
	var $ = getJQueryInstance();
	var field = $(event.target);
	var serviceStatus = field.attr('service');
	if(serviceStatus == 0)
	{
		return;
	}
	var phone = field.val();
	var parentForm = $(field).closest('form');

	var tooltip = field;

console.log(tooltip);

	var submitBtn = $(parentForm).find("input[type='submit']");
	$(parentForm).attr('state','proccess');

	if(submitBtn.length == 0)
	{
		submitBtn = $(parentForm).find("input[type='image']");
	}
	if(submitBtn.length == 0)
	{
		submitBtn = $(parentForm).find("button[type='submit']");
	}
	submitBtn.attr('disabled', 'true');
	tClassName = tooltip;

	if (!$('#phoneError').length){
		$(tClassName).after('<div class="FormError" id="phoneError"></div>');
    	}

	if(phoneType == undefined)
	{
		phoneType = '';
	}
	if(checkPhoneSyntax(phone))
	{
		if(is_mobile == true){
			field.css({ 'border' : '', 'border-color' : '' });
			//tlh
			$("#phoneError").html("Verifying...");
		}
		else
		{
			//tlh
			$("#phoneError").html("Verifying... <img src='"+ loaderImagePath +"' style='vertical-align:middle'/>");
		}
	}
	else if($.trim(phone) == '')
	{
		tClassName = tooltip;
		if(is_mobile == true){
			field.css({'border':'2px solid #F00'});
			$("#phoneError").html("Input Required");
			addTLHFormError(tClassName);
		}
		else
		{
			$("#phoneError").html("Please enter phone number");
			addTLHFormError(tClassName);
		}
		return;
	}
	else
	{
		if(is_mobile == true){
			field.css({'border':'2px solid #F00'});
			$("#phoneError").html("Invalid Syntax");
			addTLHFormError(tClassName);
		}
		else
		{
			$("#phoneError").html("Invalid Phone Syntax");
			addTLHFormError(tClassName);
		}
		return;
	}
	phoneServiceRequest(phone,tooltip,submitBtn,phoneType,parentForm,field);
}
/******************************************* Phone Change Handler Function ********************************/


/*********************************************************** Syntax Check functions **********************************************/
function checkEmailSyntax(str){
	if(isGmailAddress(str) == true)
	{
		str = removePlusFromEmailAddress(str);
	}
	 reEmail = new RegExp(/^([a-zA-Z0-9])+([a-zA-Z0-9\+._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/);
	 if (!reEmail.test(str)) {
	  return false;
	}
	 return true
}
function removePlusFromEmailAddress(Email)
{
	var domain = Email.substring(Email.lastIndexOf('@')+1, Email.length);
	var emailHandle = Email.substring(0,Email.lastIndexOf('+'));
	if(emailHandle != '')
	{
		Email = emailHandle + '@' + domain ;
	}
	return Email;
}
function isGmailAddress(str)
{
	if(getDomainFromEmail(str) == 'gmail')
		return true;
	else
		return false;
}

function getDomainFromEmail(Email){
	var atsign = Email.substring(Email.lastIndexOf('@')+1, Email.length);
	atsign = atsign.substring(0,atsign.lastIndexOf('.'));
    atsign.toLowerCase();
	return atsign;
}

function getDomainNameFromEmail(Email){
	var atsign = Email.substring(Email.lastIndexOf('@')+1, Email.length);
    atsign.toLowerCase();
	return atsign;
}

function checkPhoneSyntax(str){
	if(str.length < 10){
	   return false
	}
	var raw_number = str.replace(/[^0-9]/g,'');
	rePhoneNumber = new RegExp(/^[1-9]\d{3}\d{3}\d{4}$/);
	phoneNumberPattern = new RegExp(/^\d{3}[- ]?\d{3}[- ]?\d{4}$/);
	var regex1 = /^1?([2-9]..)([2-9]..)(....)$/;
	if (rePhoneNumber.test(str) || phoneNumberPattern.test(str) || regex1.test(raw_number)) {
	  return true;
	}
	return false;
}

/*********************************************************** Syntax Check functions **********************************************/


/************************************************************* Service Timeout functions ******************************************/
function emailServiceTimeOut(tooltip,submitBtn,parentForm){
	if(emailcallstatus == true)
	{
		var $ = getJQueryInstance();
		//myElementArray[tooltip.tooltip('option').tip] = 0;
		submitBtn.removeAttr('disabled');
		$(parentForm).removeAttr('state');
		//tClassName = "."+tooltip.tooltip('option').tip;
		//$( tClassName).tooltip( "disable" );
		// todo remove tlh validation error

	}
}

function phoneServiceTimeOut(tooltip,submitBtn,parentForm){
	if(phonecallstatus == true)
	{
		var $ = getJQueryInstance();
		//myElementArray[tooltip.tooltip('option').tip] = 0;
		submitBtn.removeAttr('disabled');
		$(parentForm).removeAttr('state');
		//tClassName = "."+tooltip.tooltip('option').tip;
		//$( tClassName).tooltip( "disable" );
		// todo remove tlh validation error
	}
}

/************************************************************* Service Timeout functions ******************************************/

/************************************************************* Service Request functions ******************************************/
function emailServiceRequest(email,tooltip,button,parentForm,field,autocorrect) {
	var $ = getJQueryInstance();
	var url = serverURL + "emails/process/?type=json&apikey="+ apiKey + "&domain="+ domainname +"&v1="+ affiliateid +"&v2="+ subaffiliateid + "&";

	url = url + "bypass_status=" + bypass_email + "&"
	extrastring = getPostBackData(parentForm);
	if(extrastring != '')
	{
		url = url + extrastring;
	}
	url = url + "callback=?";
	if(autocorrect == undefined)
		autocorrect = 0;
	else
		autocorrect = 1;
	emailcallstatus = true;
	emailtimeOut = setTimeout(function() {emailServiceTimeOut(tooltip,button,parentForm);}, emailtimeout);
	$.getJSON(
			  url, {"email" : email,"autocorrect":autocorrect},
			  function(json){
				emailcallstatus = false;
				clearTimeout (emailtimeOut);
				var service_email = json["email"];
				emailSuccessResponseHandler(service_email,tooltip,button,parentForm,field);
	});
}


function phoneServiceRequest(phone,tooltip,button,phoneType,parentForm,field) {
	var $ = getJQueryInstance();
	var url = serverURL + "phone/process/?type=json&apikey="+ apiKey + "&domain="+ domainname + "&v1="+ affiliateid +"&v2="+ subaffiliateid + "&phonetype="+ phoneType +"&";
	extrastring = getPostBackData(parentForm);
	if(extrastring != '')
	{
		url = url + extrastring;
	}
	url = url + "callback=?";

	phonecallstatus = true;
	phonetimeOut = setTimeout(function() {phoneServiceTimeOut(tooltip,button,parentForm);}, phonetimeout);
	$.getJSON(
			  url, {"phone" : phone},
			  function(json){
				phonecallstatus = false;
				clearTimeout (phonetimeOut);
				var service_phone = json["phone"];
				phoneSuccessResponseHandler(service_phone,tooltip,button,parentForm,field);
	});
}

/************************************************************* Service Request functions ******************************************/

/************************************************************* Service Success Response Handler functions ******************************************/

function emailSuccessResponseHandler(ajaxResponse,tooltip,submitBtn,parentForm,field ){
	var $ = getJQueryInstance();
	var tClassName = tooltip;
	if(ajaxResponse.error){

		if(ajaxResponse.status == 'correction')
		{
			user_email = ajaxResponse.user_email;
			correct_email = ajaxResponse.correct_email;
			//xverifySuggestEmail(user_email,correct_email,tooltip,submitBtn,parentForm,field);
			return;
		}
		if(ajaxResponse.status == 'bypass')
		{

			user_email = ajaxResponse.user_email;
			bypass_message = ajaxResponse.message;
			valid_message = ajaxResponse.message_valid;
			inavlid_message = ajaxResponse.message_invalid;

			call_function = '';
			if(ajaxResponse.call_function != undefined && jQuery.trim(ajaxResponse.call_function) != '' )
				call_function = ajaxResponse.call_function;

			if(bypass_message == '')
			{
				service_captcha["email"] = 0;
				$(parentForm).removeAttr('state');
				submitBtn.removeAttr('disabled');
				field.unbind('change');
				return;
			}
			xverifyByPassEmail(user_email,tooltip,submitBtn,parentForm,field,bypass_message,valid_message,inavlid_message,call_function);
			return;
		}

		if(is_mobile == true){
			field.css({'border':'2px solid #F00'});
		}

		$("#emailError").html(ajaxResponse.message); //tlh
		addTLHFormError(tClassName); //tlh


		if(ajaxResponse.status == 'pending')
		{
		}
		else
		{
		}
	}
	else
	{
		//service_captcha["email"] = 0;
		$(parentForm).removeAttr('state');
		submitBtn.removeAttr('disabled');
		//tlh
		var $emailErrorDiv = $("#emailError");
		handleSuccessfulInputAfterError($emailErrorDiv)
		// $("#emailError").html("The right spot");
		removeTLHFormError(tClassName); //tlh
		// $("#emailError").remove();
		field.val(ajaxResponse.address);
		if(formautosubmit == true)
		{
			parentForm.submit();
		}
	}
	if(ajaxResponse.call_function != undefined && jQuery.trim(ajaxResponse.call_function) != '' )
	{
		functionstatus  = $.isFunction(window[ajaxResponse.call_function]);
		if(functionstatus)
		{
			var callbackfunction_args = []
			callbackfunction_args.status = ajaxResponse.status;
			callbackfunction_args.responsecode = ajaxResponse.responsecode;
			window[ajaxResponse.call_function](callbackfunction_args);
		}
	}
	formButtonCheckHandler(tooltip,submitBtn,parentForm);
}

function phoneSuccessResponseHandler(ajaxResponse,tooltip,submitBtn,parentForm,field){
	var $ = getJQueryInstance();
	tClassName = tooltip;
	if(ajaxResponse.error){


		if(is_mobile == true){
			field.css({'border':'2px solid #F00'});
		}
		if(ajaxResponse.status == 'pending')
		{
			//showRecaptcha(showCaptchaDiv,reCaptchaKey,'phone',field);
		}
		if(ajaxResponse.status == 'bypass')
		{

			bypass_message = ajaxResponse.message;
			message_valid =  ajaxResponse.message_valid;
			message_invalid =  ajaxResponse.message_invalid;

			call_function = '';
			if(ajaxResponse.call_function != undefined && jQuery.trim(ajaxResponse.call_function) != '' )
				call_function = ajaxResponse.call_function;

			if(bypass_message == '')
			{
				field.unbind('change');
				service_captcha["phone"] = 0;
				$(parentForm).removeAttr('state');
				submitBtn.removeAttr('disabled');
				return;
			}
			xverifyByPassPhone(tooltip,bypass_message,message_valid,message_invalid,submitBtn,parentForm,call_function);
			return;
		}
		else
		{
			//service_captcha["phone"] = 0;
		}

		$("#phoneError").html(ajaxResponse.message); //tlh
		addTLHFormError(tClassName); //tlh

	}
	else
	{
		// service_captcha["phone"] = 0;
		submitBtn.removeAttr('disabled');
		$(parentForm).removeAttr('state');
		//tlh
		var $phoneErrorDiv = $("#phoneError")
		handleSuccessfulInputAfterError($phoneErrorDiv)
		// $("#phoneError").html("");
		removeTLHFormError(tClassName); //tlh
	}
	if(ajaxResponse.call_function != undefined && jQuery.trim(ajaxResponse.call_function) != '' )
	{
		functionstatus  = $.isFunction(window[ajaxResponse.call_function]);
		if(functionstatus)
		{
			var callbackfunction_args = []
			callbackfunction_args.status = ajaxResponse.status;
			window[ajaxResponse.call_function](callbackfunction_args);
		}
	}
	formButtonCheckHandler(tooltip,submitBtn,parentForm);
}

/************************************************************* Service Success Response Handler functions ******************************************/

/************************************************************* Service Response Handler functions ******************************************/

/************************************************************* Service Response Handler functions ******************************************/

function getPostBackData(form)
{
	var $ = getJQueryInstance();
	var returnString = '';
	fieldclass = 'xverify_postback';
	fieldElement = getInputElementsByAttributeFromSpecficForms('class',fieldclass,form)
	for (var i = 0; i < fieldElement.length; i++)
	{
		field = $(fieldElement[i]);
		name = field.attr('name');
		value = field.attr('value');
		returnString = returnString + 'postback[' +  	name + ']=' + value + '&';
	}
	return returnString;
}
function getJQueryInstance(){
	if(jquerynoconflictinstance == true)
	{
		return jQuery.noConflict();
	}
	else
	{
		return $;
	}
}
function removeXverifyServiceFromElement(selector)
{
	var $ = getJQueryInstance();
	var inputElements = $(selector);
	inputElements.attr('service','0');
	inputElements.trigger('change');
	var tooltip = inputElements.tooltip();
	tClassName = "."+tooltip.tooltip('option').tip;
	$( tClassName).tooltip( "disable" );
	inputElements.unbind('change');
	inputElements.unbind('focus');
}
function addXverifyServiceOnElement(selector){
	var $ = getJQueryInstance();
	if(checkServiceExist('email'))
	{
		var inputElements = $(selector);
		bindToolTipOnInputElements(inputElements,{ message_position : tooltip_position });
		inputElements.unbind('change', emailChangeHandler);
		inputElements.bind('change', emailChangeHandler);
		var tooltip = inputElements.tooltip();
		tClassName = "."+tooltip.tooltip('option').tip;
		$( tClassName).tooltip( "disable" );
		$( tClassName).tooltip( "enable" );
		$(tClassName).tooltip({content: ""});
		inputElements.attr('service','1');
	}
}

// tlh Functions to trigger form errors

function addTLHFormError(tClassName){ //tlh
	var tClassName = tClassName;
	$(tClassName).addClass("error");
	$(tClassName).parent().find('.formError').remove();
	$(tClassName).parent().find('.formValid').remove();
	$(tClassName).after('<span class="formError">' + $(tClassName).attr('title') +'</span>');
}

function removeTLHFormError(tClassName){ //tlh
	var tClassName = tClassName;
	$(tClassName).removeClass('error');
	$(tClassName).parent().find('.formError').remove();
	$(tClassName).parent().find('.formValid').remove();
	$(tClassName).after('<span class="formValid">&nbsp;</span>');
}


//TLH FUNCTIONS ADDED

function handleSuccessfulInputAfterError(inputItem) {
	inputItem.html('Success &#10003;').delay(2000).fadeOut('slow', 'linear', function() {
		$(this).remove();
	});
}

// TLH FUNCTIONS END

jQuery(document).ready(function($){
	bindRequiredInputFields($);
});
