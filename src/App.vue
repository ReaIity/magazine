<template>
  <v-app>
    <v-navigation-drawer
            app temporary
            v-model="getDrawer"
    >
      <v-list subheader>
        <v-subheader>Actions</v-subheader>
        <v-list-item
                v-for="link in links"
                @click="!true"
                :to="link.url"
                :key="link.title"
        >
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

      <v-app-bar
              absolute
              dark
              :hide-on-scroll="hideOnScroll"
              :fade-on-scroll="fadeOnScroll"
      >

        <v-app-bar-nav-icon
          @click="getDrawer = !getDrawer"
          class="hidden-md-and-up"
        >
        </v-app-bar-nav-icon>

        <v-toolbar-title
                style="cursor: default"
        >
            Ginger Magazine
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items
                class="hidden-sm-and-down"
        >
            <v-btn
                    :text="true"
                    v-for="link in links"
                    :key="link.title"
                    :to="links.url"
                    icons
            >
                {{link.title}}
            </v-btn>
        </v-toolbar-items>

      </v-app-bar>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      getDrawer: false,
      hideOnScroll: true,
      extended: true,
      fadeOnScroll: true,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/Login'},
        {title: 'Registration', icon: 'mdi-face', url: '/Registration'},
        // eslint-disable-next-line max-len
        {title: 'Orders', icon: 'mdi-bookmark-multiple-outline', url: '/Orders'},
        {title: 'New ad', icon: 'mdi-file-plus', url: '/New'},
        {title: 'My ads', icon: 'mdi-view-list', url: '/AdList'},
      ],
    };
  },
  methods: {
  },
};
</script>
