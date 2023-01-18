let App = {  
    data() {  
        return {  
            grades : [  
  
            ]  
        };  
    },  
    methods : {  
        addGrade (event) 
        {  
            let value = event.target.grade.value;  
            
            if(value ==="")
            {
                this.grades.push();
            }
            else
            {
                this.grades.push(value);
            }
        },
        
        taskDone(e)
        {
            let task = e.target.grade.value;
            task.classList.add("done");   
        }
    }  
};

export { App };