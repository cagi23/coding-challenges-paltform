Introduction In today’s tech-driven world, hosting real-world coding competitions requires a well-structured backend. To ensure seamless API interactions and a solid database foundation, we leverage Swagger for API documentation and an Entity-Relationship Diagram (ERD) for database design. In this post, we’ll walk through setting up Swagger and designing an ERD for an efficient competition platform.

Introduction In today’s tech-driven world, hosting real-world coding competitions requires a well-structured backend. To ensure seamless API interactions and a solid database foundation, we leverage Swagger for API documentation and an Entity-Relationship Diagram (ERD) for database design. In this post, we’ll walk through setting up Swagger and designing an ERD for an efficient competition platform.

Step 1: Creating an Entity-Relationship Diagram (ERD)

Before developing the system, a well-defined ERD helps visualize relationships between different entities. Here’s an overview of the key entities for our coding competition platform:

Users – Stores participant and admin details.

Competitions – Defines coding competitions.

Problems – Contains coding challenges for each competition.

Submissions – Tracks user submissions.

Leaderboard – Stores scores and rankings.

Judges – Admins or automated systems evaluating submissions.

Evaluation – Links submissions with judges for assessment.

By designing an ERD, we establish a logical data flow, ensuring an optimized and scalable database structure.

Step 2: Implementing Swagger for API Documentation

Swagger (OpenAPI) is a powerful tool for documenting RESTful APIs, enabling developers to interact with and understand the API structure effortlessly. Here’s how we set up Swagger for our competition platform:

Install Swagger in a Node.js or Python (Flask/Django) project:

For Node.js (Express): npm install swagger-ui-express swagger-jsdoc

Define API Endpoints in Swagger:

openapi: 3.0.0
info:
  title: Coding Competition API
  version: 1.0.0
paths:
  /competitions:
    get:
      summary: Get all competitions
      responses:
        200:
          description: Success
Host the API documentation:

In Express.js, use swagger-ui-express to serve the docs.

With Swagger, we provide a clear interface for frontend developers, testers, and third-party integrations to interact with our API effectively.

Conclusion By combining Swagger API documentation and a well-defined ERD, we create a coding competition platform that is both scalable and developer-friendly. Swagger ensures smooth API communication, while the ERD forms a solid database backbone.

Below the entities:

"User": ["UserID (PK)", "Name", "Email", "Password", "Role", "RegistrationDate"],
"Competition": ["CompetitionID (PK)", "Name", "Description", "StartDate", "EndDate", "PrizePool", "CreatedBy (FK)"],
"Submission": ["SubmissionID (PK)", "UserID (FK)", "ProblemID (FK)", "Code", "Language", "SubmittedAt", "Score", "Status"],
"Leaderboard": ["LeaderboardID (PK)", "CompetitionID (FK)", "UserID (FK)", "TotalScore", "Rank"],
"Judges": ["JudgeID (PK)", "Name", "Type"],
"Evaluation": ["EvaluationID (PK)", "SubmissionID (FK)", "JudgeID (FK)", "Feedback", "EvaluationTime"]
