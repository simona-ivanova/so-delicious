# So-delicious
So Delicious App is a recipe app built with React 18.2.0. This is a project, created for educational purposes.

## Architecture overview

* Server - Softuni Practice Server - https://github.com/softuni-practice-server/softuni-practice-server
* Client - ReactJS

## Usage

### Server
* `npm install`
* `npm run dev`

### Client
* `npm install`
* `npm start`

## User Authentication

The service is initialized with two users, which can be used for immediate testing:

* Normal User - peter@abv.bg : 123456

* Administrator User - simona@gmail.com : 123456

### Publick part

The user can:

* view Catalog
* view Recipe Details
* view comments
* print Recipe Details 
* login
* register
* send a message to an email

### Private part

The private part is accessible with authentication. The user can:

* view Catalog
* view Recipe Details
* view comments
* leave comments
* print Recipe Details 
* view Profile
* send a message to an email

### Administrative part

The administrative part is accessible with authentication. The user can:

* view Catalog
* view Recipe Details
* Edit recipe
* Delete recipe
* view comments
* leave comments
* print Recipe Details 
* view Profile
 
