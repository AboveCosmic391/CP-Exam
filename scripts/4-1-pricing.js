const pricingModels = [
    {
        "id": "aws00x0161",
        "question": "A company is planning to launch a new web application and is considering various AWS compute purchasing options to optimize costs. The application will have a steady, predictable workload with occasional spikes in traffic. They also need some instances to run continuously and others to handle the traffic spikes. The company wants to reduce costs but is also concerned about ensuring availability during peak times. Which combination of AWS compute purchasing options should they choose?",
        "options": {
            "A": "On-Demand Instances and Spot Instances",
            "B": "Reserved Instances and Spot Instances",
            "C": "Reserved Instances and On-Demand Instances",
            "D": "Dedicated Hosts and On-Demand Instances"
        },
        "correctAnswer": "C",
        "domain": "Billing, Pricing, and Support",
        "subDomain": "4.1 Compare AWS pricing models",
        "justification": "For a steady, predictable workload, Reserved Instances provide significant cost savings compared to On-Demand Instances. They are ideal for the continuous operation of the main application instances. To handle the occasional spikes in traffic, On-Demand Instances offer the flexibility to quickly scale up and down as needed without long-term commitments. Spot Instances, while cost-effective, are not suitable for handling traffic spikes due to their potential for sudden termination. Dedicated Hosts are typically used for compliance and regulatory requirements and are not necessary for this scenario. Therefore, a combination of Reserved Instances for the steady workload and On-Demand Instances for handling traffic spikes ensures both cost optimization and availability."
    },
    {
        "id": "aws00x0162",
        "question": "A financial services company needs to run specialized software that requires specific server configurations for compliance with stringent regulatory standards. They must ensure that their servers are not shared with other AWS customers to meet these compliance requirements. Additionally, they need to use their existing server-bound software licenses. Which AWS compute purchasing option should they choose?",
        "options": {
            "A": "On-Demand Instances",
            "B": "Reserved Instances",
            "C": "Spot Instances",
            "D": "Dedicated Hosts"
        },
        "correctAnswer": "D",
        "domain": "Billing, Pricing, and Support",
        "subDomain": "4.1 Compare AWS pricing models",
        "justification": "Dedicated Hosts provide the physical servers required to run your instances, which allows you to use your existing server-bound software licenses and meet compliance requirements by ensuring that your servers are not shared with other AWS customers. This option is ideal for customers with stringent regulatory and compliance needs that necessitate dedicated hardware. On-Demand Instances, Reserved Instances, and Spot Instances do not provide the necessary isolation and control over the physical server required for compliance with regulatory standards."
    },
    {
        "id": "aws00x0163",
        "question": "A data analytics startup frequently runs large-scale data processing jobs that are not time-sensitive. These jobs can tolerate interruptions and can be stopped and restarted as needed. The company wants to minimize costs while running these jobs on AWS. Which AWS compute purchasing option should they choose?",
        "options": {
            "A": "On-Demand Instances",
            "B": "Reserved Instances",
            "C": "Spot Instances",
            "D": "Dedicated Hosts"
        },
        "correctAnswer": "C",
        "domain": "Billing, Pricing, and Support",
        "subDomain": "4.1 Compare AWS pricing models",
        "justification": "Spot Instances are ideal for workloads that are flexible and can tolerate interruptions. They offer significant cost savings compared to On-Demand Instances because they allow you to bid for unused EC2 capacity. This makes them perfect for non-time-sensitive, large-scale data processing jobs. On-Demand Instances and Reserved Instances are more expensive options that provide guaranteed capacity, while Dedicated Hosts are designed for regulatory compliance and existing server-bound software licenses."
    },
    {
        "id": "aws00x0164",
        "question": "A growing e-commerce company runs a set of stable, long-term applications that require consistent, predictable performance. These applications handle customer transactions and are expected to operate 24/7 for at least the next year. The company wants to reduce its compute costs while ensuring the applications are always available. Which AWS compute purchasing option should they choose?",
        "options": {
            "A": "On-Demand Instances",
            "B": "Reserved Instances",
            "C": "Spot Instances",
            "D": "Dedicated Hosts"
        },
        "correctAnswer": "B",
        "domain": "Billing, Pricing, and Support",
        "subDomain": "4.1 Compare AWS pricing models",
        "justification": "Reserved Instances are ideal for applications with steady-state or predictable usage. They offer significant cost savings over On-Demand Instances in exchange for committing to a one-year or three-year term. This makes them perfect for long-term applications like the e-commerce company's transaction handling. Spot Instances, while cheaper, are not suitable for critical applications due to their potential for interruptions. On-Demand Instances are more flexible but more expensive, and Dedicated Hosts are designed for specific compliance or licensing needs."
    },
    {
        "id": "aws00x0165",
        "question": "A startup is planning its storage strategy for their rapidly expanding user database. They need to choose the most cost-effective storage option while ensuring quick access to frequently accessed data and cost-efficiency for less frequently accessed data. Which combination of storage options and tiers should they consider? Select TWO.",
        "options": {
            "A": "Using Amazon S3 Standard for frequently accessed data.",
            "B": "Employing Amazon S3 Glacier for long-term archival of infrequently accessed data.",
            "C": "Utilizing Amazon EBS for primary storage of frequently accessed data.",
            "D": "Employing Amazon EFS for frequently accessed data and Glacier for infrequently accessed data.",
            "E": "Using Amazon S3 Intelligent-Tiering to automatically move data between different storage tiers based on access patterns."
        },
        "correctAnswers": [
            "A",
            "B"
        ],
        "domain": "Billing, Pricing, and Support",
        "subDomain": "4.1 Compare AWS pricing models",
        "justification": "A is correct because Amazon S3 Standard is suitable for frequently accessed data due to its low latency and high availability. B is correct because Amazon S3 Glacier is designed for long-term archival of infrequently accessed data, offering cost-efficiency. C is incorrect because Amazon EBS is more suitable for block-level storage associated with EC2 instances. D is incorrect because Amazon EFS is a fully managed file system suitable for file storage, not object storage like Glacier. E is incorrect because while S3 Intelligent-Tiering automatically moves data between storage tiers, it might not be the most cost-effective option compared to Glacier for long-term archival."
    },
    {
        "id": "aws00x0166",
        "question": "A company operates a photo-sharing platform where users upload and access their photos frequently for the first month after upload, but access decreases significantly after that initial period. They want to optimize their storage costs while ensuring that all data remains accessible when needed. Which storage solution should they implement?",
        "options": {
            "A": "Use Amazon S3 Standard for all photos.",
            "B": "Utilize Amazon S3 Glacier for all photos.",
            "C": "Implement Amazon S3 Intelligent-Tiering.",
            "D": "Employ Amazon EBS volumes attached to EC2 instances."
        },
        "correctAnswer": "C",
        "domain": "Billing, Pricing, and Support",
        "subDomain": "4.1 Compare AWS pricing models",
        "justification": "Amazon S3 Intelligent-Tiering is the most suitable option because it automatically moves objects between two access tiers based on their access patterns. This ensures that frequently accessed data remains in the frequent access tier of S3 while less frequently accessed data is moved to the infrequent access tier, reducing storage costs. Option A is not optimal because it would incur higher costs for long-term storage of infrequently accessed photos. Option B is not suitable because Glacier is intended for long-term archival storage and may result in higher retrieval costs for frequently accessed photos. Option D is not appropriate as it involves block-level storage for EC2 instances, which is not necessary for storing user-uploaded photos."
    }

    
    
    
    
    
    
]