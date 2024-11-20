<template>
	<div>
		<div class="sct-global-header">
				<div class="uk-container sct-header-container">
					<nav class="uk-navbar uk-navbar-container">
						<div class="uk-navbar-left">
							<div class="uk-navbar-item">
								<a class="sct-topMenu" href="#sideMenu-id" uk-toggle>
									<i uk-icon="icon: menu"></i>
								</a>
							</div>
							<a class="uk-navbar-item uk-logo">
								<img class="uk-responsive-height" src="~public/static/img/logo.svg" alt="6人游定制旅行" />
							</a>
						</div>
						<div class="uk-navbar-right">
							<div class="uk-navbar-item">
								<NuxtLink to="/submit">
									<button class="uk-button uk-button-default btn-border sct-btn-top">Inquiry</button>
								</NuxtLink>
							</div>
						</div>
					</nav>
				</div>
   </div>

   <div id="sideMenu-id" class="sct-sideMenu" uk-offcanvas="overlay: true">
				<div class="uk-offcanvas-bar">
					<button class="uk-offcanvas-close" type="button" uk-close></button>
					<div class="sct-nav-wrap">
						<ul class="uk-nav sct-nav-box">
							<li class="sct-nav-item">
								<NuxtLink to="/">
									<span>Home</span><i uk-icon="icon: chevron-right"></i>
								</NuxtLink>
							</li>
							<li class="sct-nav-item">
								<NuxtLink to="/destinations" target="_blank">
									<span>Destinations</span><i uk-icon="icon: chevron-right"></i>
								</NuxtLink>
							</li>
							<li class="sct-nav-item">
								<NuxtLink to="/submit" target="_blank">
									<span>Send Inquiry</span><i uk-icon="icon: chevron-right"></i>
								</NuxtLink>
							</li>
							<li class="sct-nav-item">
								<NuxtLink to="/about" target="_blank">
									<span>About Us</span><i uk-icon="icon: chevron-right"></i>
								</NuxtLink>
							</li>
							<li class="sct-nav-item">
								<NuxtLink to="/privacy" target="_blank">
									<span>Privacy Policy</span><i uk-icon="icon: chevron-right"></i>
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
	</div>

</template>

<script setup>


</script>

<style>

</style>