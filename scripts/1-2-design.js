const designPrinciplesOfCloud = [
    {
        "id": "aws00x0011",
        "question": "Ramos, an IT manager for a company, takes steps to ensure the security of the organization's cloud account. He creates individual accounts for each user needing access to cloud resources, implements IAM policies to manage their permissions effectively, and enforces encryption on an S3 bucket and an RDS instance. Which aspect of the AWS Well-Architected Framework is Ramos primarily focusing on with these actions?",
        "options": {
            "A": "Cost Optimization pillar",
            "B": "Reliability pillar",
            "C": "Operational Excellence pillar",
            "D": "Security pillar"
        },
        "correctAnswer": "D",
        "domain": "Cloud Concepts",
        "subDomain": "1.2 - Identify design principles of the AWS Cloud",
        "justification": "Ramos's actions align closely with the Security pillar of the AWS Well-Architected Framework. By creating separate accounts for each user, implementing IAM policies to control access, and enforcing encryption on sensitive data stored in S3 and RDS, he is prioritizing security measures to safeguard the organization's cloud environment. These actions help mitigate risks associated with unauthorized access, data breaches, and compliance violations, thereby enhancing the overall security posture of the organization's cloud infrastructure. Therefore, the correct answer is D) Security pillar."
    },
    {
        "id": "aws00x0012",
        "question": "Kate proposes implementing operational improvements for the company's AWS infrastructure. She suggests placing the EC2 fleet into an autoscaling group to enhance fault tolerance and redundancy. Additionally, she plans to set up CloudWatch alarms on EC2 instances to monitor instance health and CPU utilization. Which aspect of the AWS Well-Architected Framework does Kate primarily focus on with these proposals?",
        "options": {
            "A": "Security pillar",
            "B": "Cost Optimization pillar",
            "C": "Reliability pillar",
            "D": "Operational Excellence pillar"
        },
        "correctAnswer": "D",
        "domain": "Cloud Concepts",
        "subDomain": "1.2 - Identify design principles of the AWS Cloud",
        "justification": "Kate's proposals align with the Operational Excellence pillar of the AWS Well-Architected Framework. By placing the EC2 fleet into an autoscaling group, the company can automatically adjust its capacity in response to demand, ensuring optimal performance and availability while minimizing operational overhead. Additionally, setting up CloudWatch alarms enables proactive monitoring of instance health and resource utilization, allowing the company to identify and address potential issues promptly. These initiatives contribute to improving operational efficiency, enabling the company to focus on delivering value to customers. Therefore, the correct answer is D) Operational Excellence pillar."
    },
    {
        "id": "aws00x0013",
        "question": "Sarah, a cloud architect for an e-commerce platform, proposes using AWS Lambda functions to automatically resize images uploaded by users. By implementing this solution, she aims to reduce manual intervention in image processing tasks, thereby increasing efficiency and minimizing potential errors. Which aspect of the AWS Well-Architected Framework is Sarah primarily focusing on with this proposal?",
        "options": {
            "A": "Security pillar",
            "B": "Cost Optimization pillar",
            "C": "Reliability pillar",
            "D": "Operational Excellence pillar"
        },
        "correctAnswer": "D",
        "domain": "Cloud Concepts",
        "subDomain": "1.2 - Identify design principles of the AWS Cloud",
        "justification": "Sarah's proposal aligns with the Operational Excellence pillar of the AWS Well-Architected Framework. By using AWS Lambda functions to automatically resize images, she is reducing manual intervention in image processing tasks, thereby increasing efficiency and minimizing potential errors. This approach helps streamline operations and ensures consistent, reliable image processing, which contributes to overall operational excellence. Therefore, the correct answer is D) Operational Excellence pillar."
    },
    {
        "id": "aws00x0014",
        "question": "As the IT administrator for a growing company, you plan to enhance the scalability and reliability of your AWS infrastructure. You propose implementing Elastic Load Balancing (ELB) to distribute incoming traffic across a fleet of EC2 instances within Auto Scaling groups. Additionally, you suggest creating read replicas for your RDS database and configuring daily backups of RDS data to Amazon S3. Which aspect of the AWS Well-Architected Framework are you primarily focusing on with these proposals?",
        "options": {
            "A": "Security pillar",
            "B": "Cost Optimization pillar",
            "C": "Reliability pillar",
            "D": "Operational Excellence pillar"
        },
        "correctAnswer": "C",
        "domain": "Cloud Concepts",
        "subDomain": "1.2 - Identify design principles of the AWS Cloud",
        "justification": "The proposals to implement Elastic Load Balancing for distributing traffic across EC2 instances within Auto Scaling groups, and creating RDS read replicas along with daily backups to Amazon S3, primarily address the Reliability pillar of the AWS Well-Architected Framework. These actions aim to enhance the resilience and availability of the company's infrastructure. Elastic Load Balancing ensures that incoming traffic is evenly distributed across multiple instances, reducing the risk of overloading any single instance and enhancing fault tolerance. Creating read replicas for the RDS database improves reliability by offloading read operations and providing redundancy in case of primary instance failure. Configuring daily backups to Amazon S3 helps ensure data durability and facilitates rapid recovery in the event of data loss or corruption. Therefore, the correct answer is C) Reliability pillar."
    },
    {
        "id": "aws00x0015",
        "question": "Louise, an AWS Solutions Architect, utilizes AWS Trusted Advisor to identify that RDS instances are not being backed up, and she analyzes CloudWatch metric data to discover that many EC2 instances are oversized, resulting in resource underutilization. She recommends enabling RDS backups and resizing EC2 instances to smaller types to optimize costs. Which aspect of the AWS Well-Architected Framework is Louise primarily focusing on with these recommendations?",
        "options": {
            "A": "Security pillar",
            "B": "Cost Optimization pillar",
            "C": "Reliability pillar",
            "D": "Operational Excellence pillar"
        },
        "correctAnswer": "B",
        "domain": "Cloud Concepts",
        "subDomain": "1.2 - Identify design principles of the AWS Cloud",
        "justification": "Louise's recommendations align with the Cost Optimization pillar of the AWS Well-Architected Framework. By identifying opportunities to optimize costs, such as enabling RDS backups to ensure data durability and resizing EC2 instances to smaller types to improve resource utilization, she aims to maximize the value of the company's AWS investments. Enabling RDS backups enhances data resilience without incurring additional costs, while resizing EC2 instances to match workload requirements helps eliminate resource waste and reduce unnecessary expenses. By focusing on cost optimization, Louise contributes to the efficient use of resources and cost-effectiveness of the company's AWS environment. Therefore, the correct answer is B) Cost Optimization pillar."
    },
    {
        "id": "aws00x0016",
        "question": "Amanda, a DevOps Engineer, is tasked with optimizing the performance of the company's AWS infrastructure. She notices that the latency of API calls to the company's serverless applications has increased significantly during peak hours. After analyzing CloudWatch logs, she identifies that the primary cause of latency is the invocation of multiple Lambda functions sequentially, resulting in inefficient processing. To address this issue, Amanda proposes restructuring the architecture to leverage AWS Step Functions, allowing for parallel execution of Lambda functions and reducing overall latency. Which aspect of the AWS Well-Architected Framework is Amanda primarily focusing on with this proposal?",
        "options": {
            "A": "Security pillar",
            "B": "Cost Optimization pillar",
            "C": "Reliability pillar",
            "D": "Performance Efficiency pillar"
        },
        "correctAnswer": "D",
        "domain": "Cloud Concepts",
        "subDomain": "1.2 - Identify design principles of the AWS Cloud",
        "justification": "Amanda's proposal to optimize the architecture by restructuring it to leverage AWS Step Functions for parallel execution of Lambda functions aligns with the Performance Efficiency pillar of the AWS Well-Architected Framework. By addressing the latency issue in API calls during peak hours, she aims to improve the responsiveness and scalability of the company's serverless applications. Leveraging AWS Step Functions allows for more efficient processing of tasks by executing Lambda functions in parallel, thereby reducing overall latency and enhancing performance. By focusing on performance efficiency, Amanda contributes to the optimization of resource utilization and the responsiveness of the company's AWS infrastructure. Therefore, the correct answer is D) Performance Efficiency pillar."
    }
    
    
    
    
    
    
]