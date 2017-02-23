
var app = new Vue({

  // We want to target the div with an id of 'events'
  el: '#datas',

  data: {
    pages:'data',
    datas:{
      letter:'',
      frequency:'',
      sLetter:'',
      sFreq:''
    },
    updatedDatas:{
      _id:'',
      letter:'',
      frequency:''
    },
    datadate:{
      datadate:'',
      frequency:'',
      sdatadate:'',
      sFreq:''
    },
    updatedDatadate:{
      _id:'',
      datadate:'',
      frequency:'',
    },
    datases:[]
  },

  // Anything within the ready function will run when the application loads
  mounted: function() {
      this.fetchData()
  },

  // Methods we want to use in our application are registered here
  methods: {
    fetchData: function() {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/data',
        success: function(data) {
          console.log(data);
          app.datases = data

        },
        error: function(error) {
          console.log(error);
        }
      });
    },

  // Adds an event to the existing events array
  addData: function() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/data',
      data:{letter:app.datas.letter,
            frequency:app.datas.frequency},
      success: function(data) {
        app.fetchData()
        app.datas = {
          letter:'',
          frequency:''
        };
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  deleteData: function(id){
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/data/${id}`,
      success: function(data) {
        app.fetchData()
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  open: function(id){
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/data/${id}`,
      success: function(data) {
        app.updatedDatas ={
          _id:data._id,
          letter:data.letter,
          frequency:data.frequency
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  updateData: function(id) {
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3000/api/data/${id}`,
      data:{
        letter:app.updatedDatas.letter,
        frequency:app.updatedDatas.frequency
          },
      success: function(data) {
        app.fetchData()
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  deleteData:function(id){
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/data/${id}`,
      success: function(data) {
        app.fetchData()
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  searchData: function(){
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/data/search?l=${app.datas.sLetter}&f=${app.datas.sFreq}`,
      success: function(data) {
        console.log(data);
        app.datases = data
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  logout:function(){
    localStorage.clear()
    window.location.href='http://127.0.0.1:8080/welcome.html'
  },
  dataPage:function(){
    app.pages = 'data'
    app.fetchData()
  },
  dataDatePage:function(){
    app.pages = 'dataDate'
    app.fetchDatadate()
    console.log(app.pages);
  },
  fetchDatadate: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/dataDate',
      success: function(data) {
        console.log(data);
        app.datases = data

      },
      error: function(error) {
        console.log(error);
      }
    });
  },

// Adds an event to the existing events array
addDataDate: function() {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/dataDate',
    data:{letter:app.datas.letter,
          frequency:app.datas.frequency},
    success: function(data) {
      app.fetchData()
      app.datas = {
        letter:'',
        frequency:''
      };
    },
    error: function(error) {
      console.log(error);
    }
  });
}
  }
});
