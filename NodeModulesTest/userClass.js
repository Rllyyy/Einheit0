const user = class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // Create user login by combining first letter of first name + last name
        this.login = (firstName[0] + lastName).toLowerCase();
    }
    describe() {
        return `Name:${this.firstName} ${this.lastName}, Login:${this.login}`;
    }
};

module.exports = user;