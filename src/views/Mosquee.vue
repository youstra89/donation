<template>
    <div class="mosquees">
        <h1>Mosquées</h1>
        <v-container>
            <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
            >
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-text>
                    Vueillez patienter s'il vous plaît...
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-layout row wrap class="ma-3">
                <v-btn class="grey--text" :to="{ name: 'mosquees.add' }">
                    <v-icon left>add</v-icon>
                    Ajouter une mosquée
                </v-btn>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="(mosquee, i) in mosquees" :key="i">
                    <v-card class="ma-3"> 
                        <v-responsive class="pt-4">
                            <v-card-text>
                                {{ mosquee.name }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn flat color="grey">
                                    <v-icon small left>message</v-icon>
                                    <span>Message</span>
                                </v-btn>
                            </v-card-actions>
                        </v-responsive>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mosquees: [],
            dialog: true
        }
    },
    mounted() {
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.mosquees = response.data
            this.dialog = false
        }, 
        response => {
            console.log('Erreur', response.data)
        });
    }
}
</script>

