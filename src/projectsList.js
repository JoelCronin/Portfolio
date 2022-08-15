//LIst of projects to add to portfolio
const projects = [

  {
    id:1,
    title: 'Odd Jobs',
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.324 11.387c-.547-1.272-2.073-2.124-3.41-1.901-1.337.222-1.979 1.433-1.432 2.706.578 1.343 2.234 2.202 3.598 1.863 1.209-.299 1.766-1.456 1.244-2.668zm-1.683 1.584l.12.267-.253.052-.113-.254c-.262.047-.561.041-.836-.031l-.076-.451c.227.035.509.067.725.023l.145-.047c.258-.126.179-.449-.204-.525-.284-.063-1.038-.017-1.319-.642-.158-.353-.041-.722.414-.891l-.125-.278.252-.052.12.266c.185-.031.401-.042.655-.02l.102.446c-.197-.025-.41-.047-.596-.009l-.07.018c-.359.095-.244.436.075.519.527.122 1.156.161 1.404.712.199.445-.034.75-.42.897zm6.389-5.535l2.751 6.004c-4.729 2.523-11.228-.197-16.896 2.941l-2.736-5.972c.74-.515 1.562-.876 2.518-1.113 3.358-.833 7.543.079 11.852-.99.885-.22 1.718-.508 2.511-.87zm.809-2.436c-6.829 4.423-14.376-.351-19.839 4.92l4.161 9.08c5.854-4.962 13.835-.264 19.839-4.92l-4.161-9.08z"/></svg>,
    gitHub: 'https://github.com/JoelCronin/OddJobs',
    deployed: 'https://project3-oddjobs.herokuapp.com/',
    description: 'Full-stack MERN application that connects users allowing them to both find short-term contracts and hire workers for their own casual work needs. Easy to navigate with a highly-polished UI, make finding someone to complete your task easy, and hassle-free  ',
    skills: 'MERN / JWT / Full Stack / GraphQL / Apollo / Leaflet'
  },
  {
    id: 2,
    title: 'Movie App',
    img: <svg className='iconLink' viewBox="0 0 24 24"><path d="M11.266 7l12.734-2.625-.008-.042-1.008-4.333-21.169 4.196c-1.054.209-1.815 1.134-1.815 2.207v14.597c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3v-14h-12.734zm8.844-5.243l2.396 1.604-2.994.595-2.398-1.605 2.996-.594zm-5.898 1.169l2.4 1.606-2.994.595-2.401-1.607 2.995-.594zm-5.904 1.171l2.403 1.608-2.993.595-2.406-1.61 2.996-.593zm-2.555 5.903l2.039-2h3.054l-2.039 2h-3.054zm4.247 10v-7l6 3.414-6 3.586zm4.827-10h-3.054l2.039-2h3.054l-2.039 2zm6.012 0h-3.054l2.039-2h3.054l-2.039 2z"/></svg>,
    gitHub: 'https://github.com/JoelCronin/effective-computing-machine',
    deployed: 'https://joelcronin.github.io/effective-computing-machine/',
    description: 'Personal movie database system, in which the user could search for any movie they wanted and receive back information on this movie inlcuding rating, plot, actors, director, trailer and box office takings. Users can also mark films to watch later.',
    skills: 'APIs / Moment / JavaScript / CSS / Local Storage'
  },
  {
    id:3,
    title: 'Full Stack Blog',
    img: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75"/></svg>,
    gitHub: 'https://github.com/JoelCronin/curly-chainsaw',
    deployed: 'https://true-donair-40943.herokuapp.com/',
    description: 'Built a CMS style blog site where other developers can publish their own content as well as comment on the posts of others. The front and back ends needed to be made from scratch and secure means of logging in was also required.               ',
    skills: 'SQL / Express / MVC / Sequelize / BCrypt'
  },
  {
    id:4,
    title: 'Employee Database',
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.967 21.893c-.703.07-1.377.107-1.959.107-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78.339 0 .681-.007 1.022-.021-.06-.644-.036-1.28.129-2.019-.408.026-.797.04-1.151.04-3.412 0-8.008-1.001-8.008-2.613v-2.364c2.116 1.341 5.17 1.78 8.008 1.78 1.021 0 2.068-.06 3.089-.196 1.91-1.766 4.603-2.193 6.903-1.231v-8.14c0-3.362-5.965-4.362-9.992-4.362-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 1.081 0 2.359-.086 3.635-.281-.669-.495-1.239-1.115-1.676-1.826zm-1.959-19.893c3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.361-7.992 2.361-3.412.001-8.008-.905-8.008-2.361 0-1.584 4.812-2.361 8.008-2.361zm-8.008 4.943c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.372c0 1.753-5.131 2.614-7.992 2.614-3.426-.001-8.008-1.007-8.008-2.615v-2.371zm15.5 7.057c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>,
    gitHub: 'https://github.com/JoelCronin/fantastic-journey',
    deployed: 'https://drive.google.com/file/d/1hDlmzuwOKSTTO4-Qiv6TIIBAOH4SaaD_/view',
    description: 'I was asked to build a bespoke Content Management System (CMS) so that a company could easily perform CRUD tasks on their employee database. Information listed included, roles, salary, departments and Managers.                                      ',
    skills: 'SQL / Node / Inquirer / CMS / MySQL'
  },
  {
    id:5,
    title: 'E-Commerce Database',
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.934 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.934 2.002-2 2.002-1.067 0-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.994 5.002v1.098c0 1.067-.932 1.9-1.998 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm4.996 12v7h-18v-7h18zm2-2h-22v14h22v-14zm-14.953 4c-.871 0-1.415.654-1.415 1.513.001.841.542 1.487 1.415 1.487.865 0 1.416-.635 1.416-1.487 0-.85-.535-1.513-1.416-1.513zm0 2.319c-.446 0-.636-.37-.636-.806 0-.45.182-.828.636-.828s.637.376.637.828c0 .44-.192.806-.637.806zm3.031-2.256h-1.307v2.876h.779v-.963h.527c.658 0 1.023-.401 1.023-.956s-.364-.957-1.022-.957zm-.527.648h.365c.269 0 .426.058.426.309 0 .257-.167.309-.426.309h-.365v-.618zm2.604 1.543h1.449v.685h-2.228v-2.876h2.198v.686h-1.419v.387h1.303v.648h-1.303v.47zm4.212-2.191v2.876h-.737l-.979-1.576v1.576h-.742v-2.876h.734l.981 1.581v-1.581h.743z"/></svg>,
    gitHub: 'https://github.com/JoelCronin/furry-octo-system',
    deployed: 'https://drive.google.com/file/d/1MZm3tgUkhsb--r_yiVh--bjyxMw998ji/view',
    description: 'Built the backend of an e-commerce website, ensuring all CRUD operations were easy and intuitive for the user. Utilised the \'belongsTo\' \'hasMany\' and \'belongsToMany\' functionality offered by Sequelize to link multiple models.                 ',
    skills: 'MySQL / Sequelize / Dotenv / Insomnia'
  },
  {
    id:6,
    title: 'WC 2022 Fansite' ,
    img: <svg ><path d="M17.422 20.394c-.177-.415-.219-.698-.289-1.118.625-.697 1.189-1.432 1.692-2.204.58-.196 1.271-.438 2.281-.956-.795 1.756-2.08 3.239-3.684 4.278m-8.181 1.212c1.039-.558 1.89-1.193 2.831-1.899 1.012.253 2.079.395 3.194.443l.001.007c.083.435.205.803.362 1.153-1.987.777-4.182.93-6.388.296m-7.24-9.619l1.273 1.217c-.194 1.076-.248 2.069-.234 3.214-.659-1.334-1.04-2.83-1.04-4.418l.001-.013m11.371-9.882l-.758 1.737c-2.139.56-3.384 1.125-5.214 2.107l-2.863-.586c2.128-2.389 5.337-3.74 8.835-3.258m-1.804 11.769c-1.083-.726-1.941-1.464-3.466-2.727l.546-3.576c1.446-.848 2.566-1.239 4.477-1.849.999.687 1.984 1.428 2.934 2.216l-.002.023c-.138 1.739-.42 3.066-.845 4.495-1.196.524-2.41.998-3.644 1.418m-4.758 6.661c-.555-.339-1.072-.728-1.549-1.164-.256-1.921-.361-3.89-.003-5.865l.001-.004 1.716-.745c1.211 1.126 2.346 2.004 3.676 2.928l.063 2.525c-1.323 1.046-2.369 1.738-3.904 2.325m15.108-7.311c-1 .722-1.776 1.225-3.025 1.683l-1.734-2.007c.451-1.449.738-3 .866-4.727l2.499-1.381c1.147 1.872 1.681 4.066 1.394 6.432m-9.918-13.224c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12"/></svg>,
    gitHub: 'https://github.com/stephenfudge/vigilant-octo-lamp',
    deployed: 'https://vigilant-octo-lamp.herokuapp.com/',
    description: 'Created a fun fan site for the 2022 FIFA World Cup. Anyone could view information on the all teams and view comments. However, after signing up users could also add comments and create and delete their own World Cup Dream Teams.                                    ',
    skills: ' Express / Node / Sequelize / Handlebars / BCrypt'
  },
];

export default projects;
