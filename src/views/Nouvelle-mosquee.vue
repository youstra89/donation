<template>
    <div class="mosquee">
        <h1>Ajout d'une nouvelle mosquée</h1>
        <v-container>
            <v-form class="px-3">
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg6 class="pa-3">
                        <v-text-field label="Title" v-model="Nom" prepend-icon="folder"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg6 class="pa-3">
                        <v-text-field label="Informations" v-model="info" prepend-icon="edit"></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg3>
                        <v-btn flat class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        submit(){

        }
    }
}
</script>

