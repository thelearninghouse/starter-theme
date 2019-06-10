<template>
    <div>
		<div id="form-settings">
			<form class="formAdmin__settingsForm" method="post" action="options.php">
				<form-settings :settings="schoolFormData" :templates="schoolFormData.formTemplates"></form-settings>
			</form>
		</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>