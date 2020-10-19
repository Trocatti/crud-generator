<template>
  <aside class="left-sidebar">
    <div class="scroll-sidebar" v-bar>
      <nav class="sidebar-nav" ref="navref">
        <ul id="sidebarnav">
          <li class="hide-menu">
            <h5 class="sidebar-title">{{ sideBar.name }}</h5>
          </li>
          <li @click="saveCollapseId($event.target, 'apps')">
            <a v-ripple class="has-arrow" v-b-toggle.apps>
              <v-icon :name="applications.icon" scale="1.2" />
              <span class="hide-menu">{{ applications.name }}</span>
            </a>

            <b-collapse tag="ul" id="apps" ref="apps">
              <template v-for="item in applications.itens">
                <li
                  :key="item.name"
                  v-if="!!item.name.localeCompare(sideBar.name)"
                >
                  <a :href="item.link">
                    <v-icon :name="item.icon" v-if="item.icon"></v-icon>
                    {{ item.name }}
                  </a>
                </li>
              </template>
            </b-collapse>
          </li>
          <li
            :key="topic.name"
            v-for="topic in sideBar.topics"
            @click="saveCollapseId($event.target, topic.name)"
          >
            <a v-ripple class="has-arrow" v-b-toggle="topic.name">
              <v-icon :name="topic.icon" v-if="topic.icon" scale="1.2" />
              <span class="hide-menu">{{ topic.name }}</span>
            </a>

            <b-collapse :id="topic.name" :ref="topic.name" tag="ul">
              <li :key="item.name" v-for="item in topic.itens">
                <router-link
                  :to="{ name: item.link }"
                  @click.native="$event.stopImmediatePropagation()"
                >
                  <v-icon :name="item.icon" v-if="item.icon"></v-icon>
                  {{ item.name }}
                </router-link>
              </li>
            </b-collapse>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped lang="scss" src="./sidebar.scss"></style>
<style scoped lang="scss" src="./sidebar-responsive.scss"></style>
<style scoped lang="scss" src="./sidebar-color.scss"></style>

<script src="./sidebar.js"></script>
