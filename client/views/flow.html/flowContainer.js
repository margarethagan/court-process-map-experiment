Template.flowContainer.onRendered(function(){
   $('ul.tabs').tabs();
});

Template.flowContainer.events({
  "click .tabs.tab": function(event, template){
    console.log("clicked on the first item !");
  }
});
