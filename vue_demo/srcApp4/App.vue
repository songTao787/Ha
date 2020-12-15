<template>
<div>
    <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
            <div class="page-header">
                <h2>router test</h2>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
                <router-link to="/about" >about</router-link>
                <router-link to="/home" >home</router-link>
                
            </div>
            
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style>

</style>
