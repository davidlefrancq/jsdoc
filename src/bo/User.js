/**
 * This is User Entity Class.
 */
class User{

    id;
    firstName;
    lastName;
    email;

    /**
     * @param id {number} Unique idientifer of user.
     * @param firstName {string} First name of user.
     * @param lastName {string} Last Name of user.
     * @param email {string} Email of user.
     */
    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.setEmail(email);
    }


    /**
     * Return email of user.
     * @returns {string}
     */
    getEmail() {
        let email = "";
        if(this.email){
            email = this.email;
        }
        return email;
    }

    /**
     * Set email of user.
     * @param email {string} Email fo user.
     */
    setEmail(email) {
        if(email){
            this.email = email;
        }
    }
}

export default User;
