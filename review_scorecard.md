Basic Code Challenge with Unit Testing
Expand All Collapse All
The minimum passing score: 80.0

Overall   (100.0)
Challenge Specification Requirements   (40.0)	Weight	Response
close Question 1.1.1 Have all major specification requirements been met?
The challenge itself has a set of requirements that the submission should fulfill. During evaluation, the reviewer must verify that all requirements are met.
This section deals with the major requirements - requirements, which when remain unfulfilled, contribute to the challenge's failure.

A submission not meeting the challenge requirements does not contribute to the challenge's success and jeopardizes the project deliverables and timelines.

Grade using a continuous 0 thru 9 scale - range includes:
0-2 - Multiple requirements are missing or were improperly implemented, and most major functionality is missing or does not work.
3-5 - A few important requirements are missing or were improperly implemented. Significant areas of the functionality are missing or do not work.
6-8 - The implementation takes into consideration all requirements, but there are some areas where one or more requirements are not fully addressed and necessary features are missing.
9 - The implementation fully addresses all requirements. All functionality can be used without any issues.
80.0	
close Question 1.1.2 Have all minor specification requirements been met?
Each challenge comes with its own set of minor requirements. When these requirements remain unfulfilled, the submission can still be used but cause minor inconveniences to the end user and affect the user experience

Scale:
0-2 - The submission has more than 7 minor issues, requiring at least several F2F challenges or a Code challenge to finish or clean up issues. Together these minor issues can be considered as a major issue with the submission.
3-5 - The submission has more than 5 minor issues, requiring at least one F2F challenge to finish or clean up issues.
6 - The submission has 3 minor issues.
7 - The submission has 2 minor issues.
8 - The submission has 1 minor issue.
9 - The submission meets all minor requirements.
20.0	
Code Best Practices and Technical Requirements   (30.0)	Weight	Response
close Question 1.2.1 Does the submission follow standard coding best practices?
Every project is expected to have a coding guideline adopted. Both code quality and code style are expected to be defined for a project. Else, the project follows Topcoder's own coding guideline.
Additionally, every tech stack comes with its own set of universally accepted best practices, conventions and widely adopted practices, patterns or antipatterns.

0 - Adherence to code guidelines practically non existent. Best practices not followed.
1 - Adherence to code guidelines poor. Best practices need improvements
2 - Decent consideration to code guidelines followed.  Only very minor issues.
3 - Strict adherence to code guidelines and best practices
30.0	
close Question 1.2.2 Does the submission include an appropriate amount of comments?
Code comments should be provided when the code cannot be easily understood.  Comments are not required extensively, only as needed. The developer should be capable of identifying code that may not seem obvious and thus needs to be explained using comments.

Comments should describe why the following code has been written and not what the following code is doing, which, most of the time, can be understood by going through the code and thus, make the comment unnecessary

0 - Multiple code statements are not clear in their purpose and lack comments
1 - Comments have been provided but some of them are not useful at all in understanding the code
2 - Code comments have been provided as needed. However, there appear to be comments for code that is quite obvious and thus are not needed.
3 - Code comments provided are useful. They don't seem unnecessary and contribute to understanding the application better
20.0	
close Question 1.2.3 Has obsolete or unnecessary code been cleaned up?
An application may no longer need a feature or an application feature may have become obsolete or outdated.  In such a scenario, the corresponding code needs to be removed (not commented, but removed altogether). 

Note: This should only apply to sections of code impacted by this challenge.

No - Submission contains obsolete code that should've beeen cleaned up
Yes - Submission does not contain obsolete code
20.0	
close Question 1.2.4 Has reasonable consideration been given to security?
The code submitted does not have any loopholes from a security point of view. There are no XSS vulnerabilities, code injections possible.

If the code accepts input, the input is sanitized and validated.

If the application stores sensitive information, such as passwords or credit card details, the information is protected and secured and cannot be accessed without proper authorization. Password fields are salted and hashed

If the application is a website and deals with sensitive information, the app uses HTTPS and not HTTP

0 - Application has multiple security vulnerabilities and should not be deployed. The submissions appears to have not focussed on security at all and has scant disregard for the user's privacy and safety
1 - Application has security vulnerabilities. These vulnerabilities can be patched but require significant effort and app should not be deployed without patching them.
2 - Application has minor vulnerabilities. The application can be deployed without it but the vulnerabilities need to be patched at the earliest.
3 - Application has taken steps to respect the user's privacy and secure the data that the application works with.
20.0	
close Question 1.2.5 Has reasonable consideration been given to performance?
The code submitted should be performant within reason unless performance thresholds are provided in the specification.  Page load times, API response times, etc, are all within reasonable average expected duration.

In case the application deals with a large amount of data, the application should prioritize its performance.

0 - Very poor performance of the application, it hangs or crashes due to timeouts
1 - Performance needs improvements
2 - Good performance overall, but some fine tuning needed
3 - Very good performance
10.0	
Deployment Guide   (15.0)	Weight	Response
close Question 1.3.1 Merely following the instructions in the Deployment Guide, you are able to successfully deploy the application?
Deployment Guide should use the markdown template located here: https://github.com/topcoderinc/topcoder-standards/blob/master/documentation-templates/README.md
Each section has its own purpose and if the application has multiple components, each section has been organized into sub sections to deal with each component.

In case the Deployment Guide has not been followed, the provided instructions should contain at a minimum:
a) The dependencies and their versions
b) Steps on how to deploy the application successfully
c) Steps on how to verify that the application has been deployed successfully

0 - Deployment Guide is very difficult to understand and the application cannot be deployed using the instructions in the guide alone. Conflicting instructions provided and / or multiple deployment guides exist to deploy the same application.
1 - Deployment Guide is missing certain steps for deployment but the missing steps are not significant to the deployment process and the application can still be deployed
2 - Deployment Guide is rather complete, but expects a certain level of knowledge of tools, and couldn't be deployed by a novice.
3 - Deployment Guide is well written and only by using the guide, a novice in the techology is able to successfully deploy the application
50.0	
close Question 1.3.2 Has the submission maintained the Deployment Docs if they previously existed?
As the project evolves, features are added and removed. The Deployment Steps also undergo changes and thus the guide should be constantly updated where the information that is no longer applicable or relevant is removed.

Have the docs been actively maintained?
40.0	
close Question 1.3.3 Is there some means of verification of submission provided?
Verification Steps / Submission Demonstration. There are scenarios where the participant has managed to meet the challenge requirements but due to missing deployment instructions or not following the deployment steps correctly, the reviewer is unable to verify that the submission works.

In such a case, what helps is a video (unlisted) or a set of snapshots indicating that the requirements have been met. This lets the reviewer know that they may be at fault and they can reach out to the co-pilot to deploy the app correctly,

Additionally, these videos and / or snapshots also give an indication to the reviewer as to how the submission meets the requirements and how to use the submission.

No - Submission does not contain Verification Steps / Demonstration in the Deployment Guide or a video showcasing how the submission meets the requirements.
In case the Verification / Demo is not clearly indicating how the submission meets the requirements, it is equivalent to the submission not providing them altogether
Yes - Submission contains Verification Steps and Demonstration of how it meets the requirements that are easy to follow and match what the reviewer experienced too, or verification steps do not apply here or were specifically excluded in the spec.
10.0	
Testing   (15.0)	Weight	Response
close Question 1.4.1 Does the code have proper code coverage?
Test cases need to cover all scenarios possible in the application. Test cases are expected to be comprehensive.
While the test case is not expected to hit all code in the app, all features that the app provides should be tested.

0 - Test cases not provided or the ones that are provided are not comprehensive enough and lots of features have not been captured
1 - Test cases have been provided but there are still less than 25% of features yet to be captured
2 - Test cases have been provided and provide significant coverage but missed in 1 major area, or a few minor areas.
3 - Test cases are comprehensive and capture all features of the app or were specifically not required in the spec
50.0	
close Question 1.4.2 Do all test cases provided, pass, given any test data or setup for the current application?
All test cases should pass. In case the participant has not captured all test scenarios (If section 5.1 does not have a perfect score), then consider that as a failed test case.
This is to correctly capture the score in case participants try to game the system by submitting only successful test cases

0 - Less than 70% test cases pass
1 - Less than 85% test cases pass
2 - Less than 100% test cases pass
3 - All test cases pass or were specifically not required in the spec
