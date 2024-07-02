const globalInfrastructure = [
    {
        "id": "aws00x0090",
        "question": "Your company is planning to deploy a new application on AWS, and you need to choose the most appropriate AWS Region for your workload. The application needs to comply with local data residency laws that require all data to be stored within the country of your primary user base. Based on this requirement, which factor should you prioritize when selecting an AWS Region?",
        "options": {
            "A": "Latency",
            "B": "Cost",
            "C": "Compliance",
            "D": "Services and features"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "Compliance is the primary factor to consider when your workload contains data that must adhere to local regulations and data residency laws. Choosing an AWS Region located within the country where the data must reside ensures that your application complies with these legal requirements.\n\n- Latency is important for user experience but is secondary to compliance when legal regulations are involved.\n- Cost is a significant factor, but legal compliance takes precedence over cost considerations.\n- Services and features availability is useful but does not override the necessity to comply with local laws."
    },
    {
        "id": "aws00x0091",
        "question": "Your company is developing a new gaming application that requires real-time interactions and a smooth user experience. The primary user base for this game is located in Europe. To ensure optimal performance and user satisfaction, it is crucial to minimize network latency. Based on this requirement, which factor should you prioritize when selecting an AWS Region?",
        "options": {
            "A": "Latency",
            "B": "Cost",
            "C": "Compliance",
            "D": "Services and features"
        },
        "correctAnswer": "A",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "Latency is a major factor to consider for applications that require real-time interactions and a smooth user experience. By selecting an AWS Region in close proximity to the primary user base in Europe, you can achieve lower network latency, which enhances communication quality and overall user experience.\n\n- Cost is important, but for real-time applications, reducing latency takes priority to ensure performance.\n- Compliance is crucial for applications with legal data residency requirements, but it is not the primary concern for this scenario.\n- Services and features availability is useful, but latency has a more immediate impact on the user experience for real-time applications."
    },
    {
        "id": "aws00x0092",
        "question": "Your company is planning to deploy a new data analytics platform on AWS. This platform requires the latest AWS services and features to take advantage of cutting-edge technology for data processing and machine learning. The IT team wants to ensure that the chosen AWS Region provides access to the newest services and features as soon as they are released. Based on this requirement, which factor should you prioritize when selecting an AWS Region?",
        "options": {
            "A": "Latency",
            "B": "Cost",
            "C": "Compliance",
            "D": "Services and features"
        },
        "correctAnswer": "D",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "Services and features availability is the primary factor to consider when your application requires access to the latest AWS services and features. Larger and more established AWS Regions typically receive new services, features, and software releases before smaller Regions. By selecting a Region that is known for early access to new features, your company can leverage the latest technology to enhance the capabilities of your data analytics platform.\n\n- Latency is important for user experience but is secondary to having access to the latest services and features for this use case.\n- Cost is a significant factor, but for this scenario, the availability of the latest features is more critical.\n- Compliance is crucial for legal data residency requirements, but it does not apply to the need for cutting-edge technology in this scenario."
    },
    {
        "id": "aws00x0093",
        "question": "Your company is launching a new startup and needs to deploy its web application on AWS. Budget constraints are a major concern, and the team is looking for ways to minimize operational costs while maintaining adequate performance. Based on this requirement, which factor should you prioritize when selecting an AWS Region?",
        "options": {
            "A": "Latency",
            "B": "Cost",
            "C": "Compliance",
            "D": "Services and features"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "Cost is the primary factor to consider when budget constraints are a major concern. AWS services are priced differently across Regions, and some Regions offer lower costs for the same deployment. By selecting an AWS Region with lower pricing, your company can reduce operational expenses while still maintaining adequate performance.\n\n- Latency is important for user experience but is secondary to cost considerations in this scenario.\n- Compliance is crucial for legal data residency requirements, but it does not apply here as there are no specific compliance needs mentioned.\n- Services and features availability is useful, but cost savings are the priority for this startup's budget constraints."
    },
    {
        "id": "aws00x0094",
        "question": "Your company is expanding its global presence and wants to understand how AWS infrastructure is organized to ensure high availability and low latency for its users. You need to explain the relationships among AWS Regions, Availability Zones, and edge locations to the team. Which of the following statements correctly describes these relationships?",
        "options": {
            "A": "A Region contains multiple edge locations, each of which contains multiple Availability Zones.",
            "B": "An Availability Zone contains multiple Regions, each of which contains multiple edge locations.",
            "C": "A Region contains multiple Availability Zones, and each Availability Zone contains multiple edge locations.",
            "D": "A Region contains multiple Availability Zones, and AWS edge locations are separate, globally distributed locations used for content delivery."
        },
        "correctAnswer": "D",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "AWS infrastructure is organized with Regions, Availability Zones, and edge locations in a hierarchical manner. A Region is a geographical area that contains multiple, isolated Availability Zones to ensure high availability and fault tolerance. AWS edge locations are separate, globally distributed locations specifically used for caching and delivering content closer to end users, providing low latency and high performance.\n\n- A is incorrect because edge locations are not part of the hierarchy within a Region and do not contain Availability Zones.\n- B is incorrect because Availability Zones do not contain Regions, and edge locations are not nested within Availability Zones.\n- C is incorrect because edge locations are not nested within Availability Zones but are separate entities used for content delivery."
    },
    {
        "id": "aws00x0095",
        "question": "A large multinational corporation plans to deploy a highly available web application that serves customers globally. The application must be resilient to data center failures and have low latency access for users across different continents. When architecting this application on AWS, what should the architect primarily consider to meet these requirements?",
        "options": {
            "A": "Deploying the application in multiple Availability Zones within a single Region",
            "B": "Deploying the application across multiple AWS Regions",
            "C": "Choosing the closest Region to the company’s headquarters",
            "D": "Using a single Availability Zone in multiple Regions"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "This scenario underscores the need to distinguish between the use of Availability Zones and Regions. By deploying the application across multiple Regions, the company ensures geographic redundancy and closer proximity to users worldwide, enhancing availability and reducing latency."
    },
    {
        "id": "aws00x0096",
        "question": "A mobile application development company is creating an augmented reality (AR) app that requires ultra-low latency interactions for users in metropolitan areas. The application needs to process and deliver content directly at the edge of the mobile network to ensure seamless user experiences. Which AWS service should the company utilize to achieve the necessary performance characteristics?",
        "options": {
            "A": "AWS Local Zones",
            "B": "AWS Wavelength",
            "C": "AWS Outposts",
            "D": "Amazon EC2 Instances"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "AWS Wavelength is specifically designed to bring AWS services to the edge of the 5G network, minimizing the latency to connect to an application from a mobile device. By deploying applications in Wavelength Zones, which are extensions of AWS Regions that embed AWS compute and storage services within the telecommunications providers’ data centers, the company can ensure that the AR app has the ultra-low latency required for real-time data processing. This makes AWS Wavelength the ideal choice for applications like AR that require processing at the edge of the network to support mobile users in urban environments."
    },
    {
        "id": "aws00x0097",
        "question": "A media streaming company wants to improve the performance and reliability of its streaming service for users around the world. The company needs to deliver content with low latency and high transfer speeds to provide a seamless viewing experience, regardless of the user's location. Which AWS service should the company use to achieve these goals?",
        "options": {
            "A": "AWS Direct Connect",
            "B": "AWS Wavelength",
            "C": "AWS Edge Locations",
            "D": "AWS Local Zones"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "AWS Edge Locations are part of the Amazon CloudFront content delivery network (CDN). They are used to cache copies of content closer to end-users to reduce latency and improve transfer speeds. By leveraging Edge Locations, the media streaming company can ensure that their content is delivered quickly and reliably to users worldwide, providing a better viewing experience.\n\n- AWS Direct Connect is used for creating dedicated network connections between on-premises data centers and AWS.\n- AWS Wavelength brings AWS services to the edge of the 5G network for ultra-low latency applications.\n- AWS Local Zones provide compute and storage resources closer to end-users in specific locations but are not primarily designed for content delivery."
    },
    {
        "id": "aws00x0098",
        "question": "A financial services organization is expanding its operations to a new metropolitan area and needs to deploy a high-frequency trading application that requires ultra-low latency to execute trades in real-time. Additionally, the organization must comply with data residency requirements that mandate keeping data within the local region. The team needs a solution that allows quick deployment and seamless integration with AWS services.\n\nWhich AWS infrastructure should the organization use to meet these requirements?",
        "options": {
            "A": "AWS Regions",
            "B": "AWS Availability Zones",
            "C": "AWS Edge Locations",
            "D": "AWS Local Zones"
        },
        "correctAnswer": "D",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "AWS Local Zones are designed to place AWS compute, storage, database, and other services closer to end-users in large metropolitan areas, enabling single-digit millisecond latency. They also help meet data residency requirements. Local Zones are connected to their parent Region via AWS’s private network, ensuring fast and secure access to additional services. This makes AWS Local Zones the ideal choice for deploying a high-frequency trading application with low latency and local data residency compliance.\n\n- AWS Regions provide a broad geographic distribution of AWS infrastructure but may not offer the ultra-low latency required for high-frequency trading.\n- AWS Availability Zones are part of Regions and provide fault tolerance but do not specifically address latency or data residency requirements.\n- AWS Edge Locations are used for content delivery via Amazon CloudFront and do not provide the compute and storage capabilities needed for this application."
    },
    {
        "id": "aws00x0099",
        "question": "A global e-commerce company is looking to improve the performance and reliability of its website for users around the world. The company wants to ensure that web content loads quickly and consistently, regardless of the user's location. Additionally, they want to optimize the performance of their web applications by directing traffic to the best performing endpoints.\n\nWhich AWS services should the company use to achieve these goals?",
        "options": {
            "A": "AWS Local Zones and AWS Outposts",
            "B": "Amazon CloudFront and AWS Global Accelerator",
            "C": "AWS Direct Connect and Amazon VPC",
            "D": "AWS Lambda and Amazon S3"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.2 Define the AWS global infrastructure",
        "justification": "Amazon CloudFront is a content delivery network (CDN) that caches copies of content at edge locations close to end-users, reducing latency and improving load times for web content. AWS Global Accelerator directs user traffic to the best performing endpoints based on factors such as health, geography, and latency, ensuring optimal performance and reliability. Together, these services enhance the user experience by providing faster content delivery and better application performance.\n\n- AWS Local Zones and AWS Outposts bring AWS services closer to specific locations but are not primarily focused on content delivery and global traffic optimization.\n- AWS Direct Connect and Amazon VPC are used for creating private connections and virtual networks but do not specifically address content delivery and global traffic optimization.\n- AWS Lambda and Amazon S3 provide serverless computing and storage services but do not directly enhance global content delivery and performance optimization."
    }
    
    
    
    
    
    
    
    
    
    
]