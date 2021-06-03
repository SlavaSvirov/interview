import MainPage from './components/MainPage/MainPage';
import Reviews from './components/Reviews/Reviews';
const data = [
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create  their product prototypes beautifully and efficiently',
  },
  {
    author: 'Chui',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam maiores, eaque mollitia velit rerum vel quia veniam minus aliquid voluptates nisi dolor aut tempore consectetur beatae iure error cumque.',
  },
  {
    author: 'Bart Simpson',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur rerum ex. Rem ipsum aliquid ex atque voluptatum placeat vitae! Quidem, porro eveniet aliquam ab sint veritatis repellendus cum a! Aliquid provident similique corporis sunt magnam quis numquam nisi, odit consequatur perspiciatis rem ducimus amet laudantium possimus libero voluptatem ad consectetur doloremque quas cupiditate soluta, quam culpa. Ad, praesentium ex.',
  },
  {
    author: 'Bender',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet incidunt quaerat. Neque in non mollitia vel magnam velit est, nobis voluptatibus autem magni explicabo iste optio sunt corporis ipsum. Magni accusantium reprehenderit rerum ab corporis nostrum impedit vero itaque voluptatibus delectus! Commodi pariatur quibusdam culpa esse? Animi quasi ipsa iusto asperiores ipsam magni rerum placeat, corrupti impedit sit nemo.Consequuntur aliquid ratione voluptatibus illum cumque dolorum. Architecto inventore laudantium suscipit? In, fugiat eveniet animi vero qui fugit sed velit incidunt provident ut? Quis possimus enim quibusdam, incidunt eum cum.',
  },
];

function App() {
  return (
    <div className="container">
      <MainPage />
      <hr />
      {data.map((review) => {
        return <Reviews key={review.author} review={review} />;
      })}
    </div>
  );
}

export default App;
