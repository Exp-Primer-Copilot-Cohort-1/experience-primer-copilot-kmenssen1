function skillMember() {
    
    var member = {
        name: "John",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        details: function() {
            return this.name + " is " + this.age + " years old and has skills in " + this.skills.join(", ");
        }
    };
    return member.details(); 
}