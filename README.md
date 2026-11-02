
<img width="1920" height="1080" alt="Screenshot 2026-11-01 175758" src="https://github.com/user-attachments/assets/82c970b3-a2e0-4e9a-807c-6c65c2786bd6" />

<h1>Overview</h1>

My original goal was to make a site that had two main sides : Client and business.
For the Clients they would be able to submit requests to the site and see details 
on its current state. For the business they would receive the requests with added details and be able to alter request data like the status. This scope was beyond my means so I called it at the client side.

I created this project to learn how to handle multiple components on a web site.

The original idea for it was an HVAC business page. I chose this because my father has an HVAC business but he has no website for it; so I wanted to make a prototype before presenting it to him  .

<h2> Design Philosophy </h2>

This time I wanted a modern clean look to the site.
The straightforward interface is intended to be easily digestible and intuitive.

<h2>How it Works</h2>

1. Click Create Request
2. Select a category
3. Enter your subject
4. Describe the problem
5. Hit Submit Request

From there you can view the details of your request and cancel it with the click of a button.

<h2> Project Goals</h2>

<ul>
  <li>Increase experience with form creation and validation</li>
  <li>Improve core web development fundamentals</li>
  <li>Get a better feel for UX</li>

</ul>


## Project Scope

### Current Release
Client-facing request management.

### Included
- Request submission modal
- Request listing
- View Details modal
- Request deletion

### Deferred
- Staff/business management interface
- Staff request review
- Administrative workflows

### Release Objective
Deliver a functional Client-facing application
with the ability to submit, view, and manage
individual requests.

## Application Architecture

### Data Management
- Request collection is managed by a JS module.
- Main.js coordinates application operations.

### Presentation
- Display module renders selected requests.

### Interaction
- Components communicate user actions
  to application logic.

### Relationships
- View Details Modal → Main.js
- Main.js → Request Collection
- Main.js → Display Module

