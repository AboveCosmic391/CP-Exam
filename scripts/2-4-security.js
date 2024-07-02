const securityComponents = [
    {
        "id": "aws00x0074",
        "question": "A junior sysadmin named Raj is testing network connections and discovers that HTTP traffic is not reaching a small number of EC2 instances. He verifies that the web server software is running correctly on these instances, but the issue persists. What could Raj do to fix this issue?",
        "options": {
            "A": "Create a new IAM role and attach it to the instances",
            "B": "Check and modify the security group rules to allow inbound HTTP traffic (port 80) to the instances",
            "C": "Restart the instances",
            "D": "Configure AWS CloudTrail to log all HTTP requests"
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "2.4 Identify components and resources for security",
        "justification": "The issue is likely due to the security group settings not allowing inbound HTTP traffic on port 80. Security groups act as virtual firewalls for your instances to control inbound and outbound traffic. Raj should check the security group rules associated with the affected instances and ensure that there is a rule allowing inbound traffic on port 80 (HTTP). Creating a new IAM role, restarting the instances, or configuring AWS CloudTrail would not directly address the issue of blocked HTTP traffic. Adjusting the security group rules is the correct approach to resolve this network connectivity problem."
    },
    {
        "id": "aws00x0075",
        "question": "A junior developer named Salima complains that she is unable to ping or remote into a new EC2 instance she just launched. As the cloud support associate, you need to investigate the cause of the issue. What is something you could check that might address the problem?",
        "options": {
            "A": "Ensure the instance has an Elastic IP address",
            "B": "Verify that the security group associated with the instance allows inbound ICMP (ping) and SSH (port 22) traffic",
            "C": "Create a new IAM role and attach it to the instance",
            "D": "Restart the instance"
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "2.4 Identify components and resources for security",
        "justification": "To diagnose why Salima is unable to ping or remote into the new EC2 instance, the first step is to check the security group rules associated with the instance. Security groups act as virtual firewalls and control the inbound and outbound traffic. To enable ping (ICMP) and SSH (port 22) access, the security group must have rules allowing inbound traffic for ICMP and port 22. Ensuring the instance has an Elastic IP address or restarting the instance would not resolve security group configuration issues. Creating a new IAM role is related to permissions management and would not address network connectivity problems. Therefore, verifying and updating the security group rules is the appropriate action."
    },
    {
        "id": "aws00x0076",
        "question": "A network engineer named Maria is configuring the security settings for a new VPC. She needs to control the traffic that can reach her EC2 instances and also ensure that certain traffic is blocked at the subnet level. Maria is unsure whether to use a security group or a network ACL for each requirement. Which of the following correctly describes the roles of a security group and a network ACL in AWS?",
        "options": {
            "A": "Security groups are stateful and control inbound and outbound traffic at the instance level, while network ACLs are stateless and control traffic at the subnet level.",
            "B": "Security groups are stateless and control traffic at the subnet level, while network ACLs are stateful and control inbound and outbound traffic at the instance level.",
            "C": "Security groups are used for monitoring API activity, while network ACLs are used for controlling access to AWS services.",
            "D": "Security groups are used for managing user access to AWS resources, while network ACLs are used for encrypting data in transit."
        },
        "correctAnswer": "A",
        "domain": "Security and Compliance",
        "subDomain": "2.4 Identify components and resources for security",
        "justification": "Security groups in AWS are stateful firewalls that control inbound and outbound traffic at the instance level. This means that if a rule allows inbound traffic, the corresponding outbound traffic is automatically allowed, and vice versa. Network ACLs (Access Control Lists), on the other hand, are stateless firewalls that control traffic at the subnet level. Each rule in a network ACL applies to both inbound and outbound traffic separately, and responses to allowed inbound traffic must be explicitly allowed in the outbound rules. Understanding these differences helps Maria apply the correct security controls to her VPC. Monitoring API activity and managing user access are functions related to other AWS services, and encrypting data in transit is not a function of security groups or network ACLs."
    },
    {
        "id": "aws00x0077",
        "question": "Maria is configuring the security settings for a new VPC that will host a web application. The web application runs on EC2 instances in a public subnet and needs to allow HTTP (port 80) and HTTPS (port 443) traffic from the internet. Additionally, she wants to allow SSH (port 22) access only from the company's office IP address range (192.168.1.0/24). Maria also needs to ensure that the subnet has rules to block all traffic except the necessary traffic for the web application. Which combination of rules should Maria apply to the security group and network ACL to meet these requirements?",
        "options": {
            "A": "Security Group Rules:\n- Allow inbound HTTP (port 80) from 0.0.0.0/0\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Allow inbound SSH (port 22) from 192.168.1.0/24\n\nNetwork ACL Rules:\n- Allow inbound HTTP (port 80) from 0.0.0.0/0\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Allow inbound SSH (port 22) from 192.168.1.0/24\n- Deny all other inbound traffic\n- Allow outbound traffic on all ports to 0.0.0.0/0",
            "B": "Security Group Rules:\n- Allow inbound HTTP (port 80) from 192.168.1.0/24\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Allow inbound SSH (port 22) from 0.0.0.0/0\n\nNetwork ACL Rules:\n- Allow inbound HTTP (port 80) from 0.0.0.0/0\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Allow inbound SSH (port 22) from 192.168.1.0/24\n- Deny all other inbound traffic\n- Allow outbound traffic on all ports to 0.0.0.0/0",
            "C": "Security Group Rules:\n- Allow inbound HTTP (port 80) from 0.0.0.0/0\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Allow inbound SSH (port 22) from 192.168.1.0/24\n\nNetwork ACL Rules:\n- Allow inbound HTTP (port 80) from 0.0.0.0/0\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Deny all other inbound traffic\n- Allow outbound traffic on all ports to 0.0.0.0/0",
            "D": "Security Group Rules:\n- Allow inbound HTTP (port 80) from 0.0.0.0/0\n- Allow inbound HTTPS (port 443) from 0.0.0.0/0\n- Allow inbound SSH (port 22) from 192.168.1.0/24\n\nNetwork ACL Rules:\n- Allow inbound HTTP (port 80) from 192.168.1.0/24\n- Allow inbound HTTPS (port 443) from 192.168.1.0/24\n- Allow inbound SSH (port 22) from 0.0.0.0/0\n- Deny all other inbound traffic\n- Allow outbound traffic on all ports to 0.0.0.0/0"
        },
        "correctAnswer": "C",
        "domain": "Security and Compliance",
        "subDomain": "2.4 Identify components and resources for security",
        "justification": "The security group rules allow HTTP and HTTPS traffic from any IP address to the EC2 instances and restrict SSH access to the office IP address range (192.168.1.0/24). The network ACL rules allow the same inbound traffic as the security group but also include a rule to deny all other inbound traffic, adding an additional layer of security at the subnet level. Outbound traffic is allowed on all ports to ensure the instances can communicate with the internet. This configuration provides the necessary access while maintaining security best practices."
    },
    {
        "id": "aws00x0078",
        "question": "A new security analyst, Kevin, has joined your company and is responsible for identifying and mitigating security issues in the AWS environment. Kevin needs to ensure that the AWS resources are following best practices for security, performance, and cost optimization. Which AWS service should Kevin use to identify security issues, such as exposed access keys, and receive recommendations for improvements?",
        "options": {
            "A": "AWS CloudWatch",
            "B": "AWS Trusted Advisor",
            "C": "AWS CloudTrail",
            "D": "AWS Systems Manager"
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "2.4 Identify components and resources for security",
        "justification": "AWS Trusted Advisor is a service that provides real-time guidance to help you provision your resources following AWS best practices. It offers a variety of checks in categories such as cost optimization, security, fault tolerance, performance, and service limits. Specifically, for security, Trusted Advisor can identify issues like exposed access keys, unnecessary permissions, and security group configurations that allow unrestricted access. AWS CloudWatch is used for monitoring and logging, AWS CloudTrail is used for recording API activity, and AWS Systems Manager helps manage your AWS resources, but they do not provide the comprehensive best practice checks and recommendations that Trusted Advisor offers."
    }
    
    
    
    

    
]