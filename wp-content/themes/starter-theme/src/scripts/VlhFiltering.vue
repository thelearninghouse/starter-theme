<template>
  <main id="app" class="content">
    <div class="degree-filters">

      <search-filter v-model="currentDegreeSearchFilter"></search-filter>

      <div class="filter-list-wrapper">
        <filter-list-heading
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeLevelFilter', 'showDegreeAreaFilter')"
          :selectedFilter.sync="currentDegreeLevelFilter"
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
          :selectedFilter.sync="currentDegreeAreaFilter"
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
          <FilterItem
            v-for="item in degreeAreas"
            :item="item"
            :key="item.term_id">
          </FilterItem>
        </filter-list>
      </div>
    </div>

    <degree-list>
      <degree-item v-for="degree in degreeList" :item="degree" :key="degree.ID" />
    </degree-list>

    <h1 class="no-results" v-if="!degreeList.length">No Matches</h1>
  </main>
</template>

<script>
import {degreeMixin} from 'vlh-library'
import {buildDegreeList} from '@/scripts/helpers/buildDegreeList'

export default {
  mixins: [degreeMixin],
  mounted() {
    this.degrees = buildDegreeList(wpData.degrees);
    this.degreeLevels = wpData.degreeLevels
    this.degreeAreas = wpData.degreeAreas
  }
}
</script>


<style lang="scss">
  /* Temporary */
  // .degree-filters {
  //   flex: 1 1 320px;
  //   @media (min-width: 800px) {
  //     max-width: 320px;
  //   }
  // }
  // .degree-list {
  //   flex: 1 1 calc(100% - 360px);
  // }
  // main.content {
  //   width: 1440px;
  //   display: flex;
  //   justify-content: space-between;
  //   margin: 4em auto;
  //   max-width: 100%;
  //   padding: 1.25em;
  // }
  //
  // .filter-clear {
  //   display: flex;
  //   align-items: center;
  //   cursor: pointer;
  // }


</style>
