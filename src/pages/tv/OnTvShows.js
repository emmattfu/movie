import React, {useState} from 'react';
import ShowComponent from "../../components/ShowComponent/ShowComponent.js";
import { useDispatch, useSelector } from "react-redux";
import { getShows } from '../../redux/actions.js';
import { ON_TV_SHOWS } from '../../redux/types.js';


function OnTVShows() {

  const pagesNumber = useSelector(state => state.dataReducer.pageCount)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const pages = []
 
  dispatch(getShows({page, type: ON_TV_SHOWS}))

  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i)
  }

  function selectPage(event) {
    setPage(event.target.value)
    dispatch(getShows({page, type: ON_TV_SHOWS}))
  }

    return (
        <>
          <div className="container">
            <div className="page-header">
              <h1>Currently Airing TV Shows</h1>
              <div>Page:  
                <select name="page-number" onChange={selectPage}>
                  {pages.map(el => <option key={el}>{el}</option>)}
                </select></div>
            </div>
            <div className="content-wrapper">
              <ShowComponent />)
            </div>
          </div>
        </>
      );
}

export default OnTVShows