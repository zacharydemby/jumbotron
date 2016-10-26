var asana = [];

d3.json("data.json", function(d) {  
  var data = d.data;
  var entry = {};
  
  for (var i = 0; i < data.length; i++) {
      
    if (data[i].tags.indexOf("key-priority") >= 0) {
        
        entry.name = data[i].name; 
        entry.notes = data[i].notes;
        entry.members = [];
        
        
        var j = i+1;
        while ((data[j].name != data[j].memberships[0].section.name) && j < data.length) {
            console.log(data[j].name)
          
            // TODO: Filter by time and distinct member
            entry.members.push(data[j].assignee.name);
            
            // TODO: Progress
            
            
            j = j+1;  
        }
        
        asana.push(entry); 
    }
    
  }
    
    
    
});

// name: "Shiseido CRM (Active Pursuit):"



