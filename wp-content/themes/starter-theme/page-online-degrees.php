<?php
/*
Template Name: Online Degrees
*/
get_header(); ?>

<style media="screen">

</style>
<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<!-- <div id="vlh-filtering"></div> -->
	<div id="vlh-filtering">
		<div class="degree-filters">

      <search-filter v-model="currentDegreeSearchFilter"></search-filter>

      <div class="filter-list-wrapper">
        <filter-list-heading
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeLevelFilter', 'showDegreeAreaFilter')"
          :selected-filter.sync="currentDegreeLevelFilter"
          icon-dropdown-color="#cc1f1b"
          icon-reset-color="gray"
          heading="Degree Levels">
        </filter-list-heading>

        <div class="filter-list-status" v-if="currentDegreeLevelFilter && mobile">
          <span class="text" v-html="currentDegreeLevelFilter.name"></span>
          <icon class="icon-button" @click.native="currentDegreeLevelFilter = null" icon="clear-search" color="black" size="22px"></icon>
        </div>

          <filter-list
            :visible.sync="showDegreeLevelFilter"
            :selected-filter.sync="currentDegreeLevelFilter">
            <filter-reset label="All Levels"></filter-reset>
            <filter-item
              v-for="item in degreeLevels"
              :item="item"
              :key="item.term_id">
            </filter-item>
          </filter-list>
      </div>

      <div class="filter-list-wrapper">
        <filter-list-heading
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeAreaFilter', 'showDegreeLevelFilter')"
          :selected-filter.sync="currentDegreeAreaFilter"
          icon-dropdown-color="#cc1f1b"
          icon-reset-color="gray"
          heading="Degree Areas">
        </filter-list-heading>

        <div class="filter-list-status" v-if="currentDegreeAreaFilter && mobile">
          <span class="text" v-html="currentDegreeAreaFilter.name"></span>
          <icon class="icon-button" @click.native="currentDegreeAreaFilter = null" icon="clear-search" color="black" size="22px"></icon>
        </div>

        <filter-list
          :visible.sync="showDegreeAreaFilter"
          :selected-filter.sync="currentDegreeAreaFilter">
          <filter-reset label="All Levels"></filter-reset>
          <filter-item
            v-for="item in degreeAreas"
            :item="item"
            :key="item.term_id">
          </filter-item>
        </filter-list>
      </div>
    </div>

    <degree-list>
      <degree-item v-for="degree in degreeList" :item="degree" :key="degree.ID" />
    </degree-list>
	</div>

</main>

<?php get_footer(); ?>
