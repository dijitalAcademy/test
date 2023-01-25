# Azure DevOps Cheat Sheet

The documentation on how to work with Azure DevOps is located [HERE](https://docs.microsoft.com/en-us/vsts/git/share-your-code-in-git-vs-2017?view=vsts){:target="_blank"}

The expectation is that you will get comfortable with Azure DevOps and use this documenation as reference for questions you may have.

### Create an Account
1. Visit [Azure DevOps](https://visualstudio.microsoft.com/team-services/) and create an account using the same email you used for your Azure account

#### Trello Boards are an Acceptable Replacement

### Create a Repo
1. Add your partner.
2. Add your Instructor(s)

### Beginning of Each Sprint:
Create a new sprint at the beginning of each sprint. To create a new sprint, follow these directions:
1. Under the "Boards" tab on the left, select "Sprints"
2. Select "New Sprint" in the top right corner
3. Name your sprint "{NAME OF PROJECT} - Sprint 1"

### Create a User Story/Work item
   - Go to Work Items
   - select "Add Work Item" and select "Issue"
   - Fill out the title with as "Milestone##-US##-{DescriptionOfFeature}"
   - In the description, transfer the user story (I, as a ..., want to ..., so that...)
   - In the same description box, on a new line under the user story, provide a short description of what is expected for this user story.
   - In the "iteration" drop down, select "Sprint 1"
   - Add Acceptance criteria (min 2, max 3)
   - Add your story points/effort.
		- Evaluate this on a 1-5 basis.
			- 5 means this will take all day
			- 1 means it will take just a few moments
   - Assign the user story to yourself or your partner (Reference the Milestone provided)
   - SAVE your Story

### Add Tasks to a User story
   - Under "Related Work" select "Add Link"
   - select "New item"
   - Link Type: Child
   - Work item type: Task
   - Title: Name of your tasks (i.e. create Register Action)
   - Select OK
   - Fill out the description with more information about the task
   - Under the "Planning" section:
	   - Select the appropriate Activity (Development, documentation, Design, testing etc... )
	   - Set your priority
	   - Set an estimate of time in hours
	   - Assign the task to yourself or your partner (whoever will do that task)
   - Save and close
   - Follow the above steps for each task required for the user story. Each User story should approx 3 tasks per user story.

### Kanban Board

1. If you and your partner are ok with the user stories created, go to the "boards" view and drag/drop the user story to "Active" To the ones you are working on first.
2. Be sure to actively use this board and manage user stories in the appropriate column.

### Branching a user story
When you are ready to start working on a User Story
  - Open up the user story that you want to start working on...
  - Select a specific task you are going to work on first
  - in the top right hand corner of the pop-up you will see an ellipses (...)
  -  Upon selection choose the option that says "New Branch"
  - Name your new branch in the following format `US##-TASK##-{DescriptonOFTask}`
  - link the Branch to the task you are building
  - Select create Branch


### Work on your User Story
Go to your Visual Studio local code base and be sure to sync your changes first
   - Go to your branches >> Manage Branches
   - See your newly created branch
   - select your branch and do your development
   - Commit often


### Complete a Task
Completing a task
 - When you complete a PR for a task, that completes the task
 - Go back to the task, and in the discussion, say how long it actually took you (in comparison to the remaining work that you estimated)

Go to the Sprints view - and move the task to "Done"
