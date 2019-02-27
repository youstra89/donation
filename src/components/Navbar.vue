<template>
    <dir class="navbar">
        <v-toolbar>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <span>Donation</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer app dark absolute temporary v-model="drawer" class="none">
            <v-list>
                <v-list-tile :to="{ name: 'home' }">
                    <v-list-tile-action>
                    <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Accueil</v-list-tile-title>
                </v-list-tile>
                <v-list-tile :to="{ name: 'mosquees' }">
                    <v-list-tile-action>
                    <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Mosquées</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                    prepend-icon="account_circle"
                >
                    <v-list-tile slot="activator">
                    <v-list-tile-title>Utilisateur</v-list-tile-title>
                    </v-list-tile>

                    <v-list-group
                    no-action
                    sub-group
                    >
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Admin</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                        v-for="(admin, i) in admins"
                        :key="i"
                    >
                        <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                        <v-list-tile-action>
                        <v-icon v-text="admin[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    </v-list-group>

                    <v-list-group
                    sub-group
                    no-action
                    >
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Actions</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                        v-for="(crud, i) in cruds"
                        :key="i"
                    >
                        <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                        <v-list-tile-action>
                        <v-icon v-text="crud[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </dir>
</template>


<script>
export default {
    data(){
        return {
            drawer: false,
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings']
            ],
            cruds: [
                ['Create', 'add'],
                ['Read', 'insert_drive_file'],
                ['Update', 'update'],
                ['Delete', 'delete']
            ]
        }
    }
}
</script>

