import Card from "./components/Card";

// array of an company
const jobsData = [
  {
    id: 1,
    company: "Airbnb",
    logo: "https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png",
    postedTime: "5 days ago",
    title: "Junior UI/UX Designer",
    type: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India",
  },
  {
    id: 2,
    company: "Meta",
    logo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    postedTime: "3 days ago",
    title: "Junior Frontend Developer",
    type: ["Contract", "Remote"],
    salary: "$95/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    postedTime: "5 days ago",
    title: "UI Designer",
    type: ["Full-time", "Onsite", "Freelance"],
    salary: "$120/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    postedTime: "2 days ago",
    title: "UX Research Intern",
    type: ["Internship", "Hybrid"],
    salary: "$70/hr",
    location: "Delhi, India",
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    postedTime: "1 week ago",
    title: "Product Designer",
    type: ["Contract", "Remote"],
    salary: "$130/hr",
    location: "Remote",
  },
  {
    id: 6,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    postedTime: "4 days ago",
    title: "Junior Interaction Designer",
    type: ["Full-time", "Hybrid", "Remote"],
    salary: "$110/hr",
    location: "Pune, India",
  },
];

jobsData.map((elem) => {
  console.log(elem);
});

const App = () => {
  return (
    <div className="parent">
      {/* maap function is used to return something - elem -> elements of array , elem.val -> elements of object */}
      {jobsData.map((elem) => {

        return (
           <div  key={elem.id} className='card'>
            <Card
           
              logo={elem.logo}
              company={elem.company}
              posted={elem.postedTime}
              title={elem.title}
              type={elem.type}
              salary={elem.salary}
              location={elem.location}
            />
              </div>
        );
      })}
    </div>
  );
};

export default App;
