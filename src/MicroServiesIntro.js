// what is microservices and microservices architecture
// it is very popular in backend development

// so understant this concept before we understand the "monolithic architecture"
// "jo aapde koi app ne develop karieye to ene sigle unit ma develop kariye che"
// "jo aapde airbnb ne develop karvu hoy to ena badha funcions ne ek j code ma likhiye che"
// "like authentication, payment, booking, etc n one code file we can do crud operations"
// "according to monolithic architecture we can develop the app in a single code file or single code unit"
// "most of the time projects are developed in monolithic architecture"
// "easier to develop, manage this + points but there are also - points like redeployment, scaling limitations, lots of dependemce etc"

// "but in microservices architecture we can develop the app in multiple code files or multiple code units"
// "like authentication, payment, booking, etc in different code files"
// "so if we want to change the payment system then we can only change the payment code file"
// " in short + points is Indepedent deployment, separate codebase, independent deployment, flexible scaling, technology flexibility etc"
// "- points are complex to develop, management overhead, high infrastruchur costs etc"

// "have monolithic architecture hoy to function interection is done by function call but microservices architecture hot to kevi rite use thay e alag che pn koi pn monolithic project ne microservices ma convert karva mate e project pr depend kare che"
// "have aa microservies project nana nana projects mate nthi e mota projects mate hoy che like amazon, airbnb, uber, netflix etc it means bigger team size"
// "etle microservice ni passe pota ni ek team hoy che ane CI/CD pipeline hoy che ane database alag hoy che and deployment pn alag hoy che"

// how microservices work or interaction with each other
// 1) Synchronous communication using api calls like REST or GraphQL endpoints like /auth.. for authentication /listings.. for listings and /payments.. for payments
// "have mano ke payment service ne listiong service jode intrection karva mate e listing service na endpoint pr http request send karse
// ane same rite listing service synchronously http response send karse payment service ne"

// 2) Asynchronous communication using message brokers like RabbitMQ, apeche Kafka, or AWS SQS
// "have mano ke payment service ne listing service jode intrection karva mate pahla e message broker ma message send karse"
// "ane pachi message broker listing service e message send karse"

// 3) service mesh using service mesh like Istio or Linkerd communication
// it is very common if microservices are deployed in kubernetes