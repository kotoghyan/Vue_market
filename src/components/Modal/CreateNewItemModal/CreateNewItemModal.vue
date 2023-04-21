<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="w-50">
      <v-container class="bg-white">
        <v-col>
          <v-text-field
              v-model="obj.companyName" label="Company name" :rules="namesRules" required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              v-model="obj.symbol" label="Short name" :rules="namesRules" required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              v-model="obj.price" label="Price" required type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-file-input :show-size="1024" label="File input" variant="solo" @change="onFileChange"></v-file-input>
        </v-col>
        <v-btn color="primary text-color" inline @click="this.$store.dispatch('newItem/setIsOpen')">Close</v-btn>
        <v-btn color="primary" inline @click="addItem">ADD</v-btn>
      </v-container>
    </v-dialog>
  </div>
</template>
<script>
import {mapGetters} from "vuex";


export default {
  data() {
    return {
      name: '',
      obj: {
        companyName: '',
        symbol: ''.toUpperCase(),
        price: null,
        image: '',
      },
      namesRules: [
        value => {
          if (value) return true
          return 'Name is requred.'
        }],
    }
  },

  methods: {
    addItem() {
      let {companyName, symbol, price, image} = this.obj;
      this.obj.symbol = this.obj.symbol.toUpperCase();
      if (companyName && symbol && price && image) {
        this.$store.dispatch('main/setNewItem', this.obj);
        this.$store.dispatch('newItem/setIsOpen');
        // this.$store.dispatch('main/searchItem', symbol );
      } else {
        this.resetState()
      }
      this.resetState()

    },
    resetState() {
      this.obj.companyName = '';
      this.obj.symbol = '';
      this.obj.price = null;
      this.obj.image = '';
    },
    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage(file) {
      let reader = new FileReader()

      reader.onload = (event) => {
        this.obj.image = event.target.result
      }
      reader.readAsDataURL(file)
    },
  },

  name: "CreateNewItemModal",
  computed: {
    ...mapGetters({
      dialog: 'newItem/condition'
    })
  }
}
</script>

<style scoped>

</style>