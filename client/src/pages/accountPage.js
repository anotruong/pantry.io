import FavItem from '../components/favItem';
import './stylesheets/accountPage.css';

// Add a schema for account information

const AccountPage = () => {

  const accTester = [
    {
      userId: 'alksdjf12#12',
      userName: 'DoubleMelt',  
    }
  ]

  const favTester = [
    {name: 'pear', id: '02', date: '1 day ago'}, {name: 'cheese', id: '03', date: '2 days ago'}, 
    {name: 'chowder', id: '04', date: '1 week ago'}, {name: 'banana', id: '11', date: '1 week ago'},
    {name: 'egg whites', id: '12', date: '2 weeks ago'}, {name: 'tortilla chips', id: '13', date: '3 weeks ago'},
    {name: 'panko crumbs', id: '14', date: '4 weeks ago'}, {name: 'bread', id: '15', date: '4 weeks ago'},
    {name: 'jasmine rice',  id: '16', date: '4 weeks ago'}, {name: 'nerds rope', id: '18', date: '4 weeks ago'}, 
    {name:'lemon', id: '19', date: '5 weeks ago'},
  ];

  const userNameHandler = () => {
    return accTester[0].userName;
  };

  const resultHandler = favTester.map((obj) => <FavItem props={obj} /> );

  return (
    <div id='accountPage-container' >
      <div className='accountPage'>
        <div id='accountPage-flex'>
          <div id='accountInfo-flex'>
            <div id='pfp-icon' />
            <h1 id='username'>{userNameHandler()}</h1>
          </div>
          <div id='accountFeature-container'>
            <div id='accountFeatures-flex'>
              <div id='accBtn-container'>
                <button 
                  className='accBtnFeature' 
                  id='favoriteFeature' 
                >favorites</button>
                <button 
                  className='accBtnFeature' 
                  id='searchHistory' 
                >searches</button>
              </div>
              <div id='acctResults' >
                <div id='numOfResults'>
                  <h3># of Results</h3>
                </div>
              </div>
              <div id='displayResult-container'>
                {resultHandler}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;