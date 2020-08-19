// import React from "react";
// import {Route} from 'react-router-dom';
// import CollectionPage from "../collection/collection.component";
// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
// import {connect} from 'react-redux';
// import {updateCollections} from "../../redux/shop/shop.actions";
// class ShopPage extends React.component{
//     unsubscribeFromSnapshot = null;
//     componentDidMount() {
//         const {updateCollections} = this.props;
//         const collectionRef = firestore.collection('collections');
//         this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//             console.log(collectionsMap)
//             updateCollections(collectionsMap)
//         })
//     }
//
// render () {
//     const {match} = this.props;
//     return (
//     <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionsOverview}/>
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
//
//     </div>
//
// )
// }}
//
// const mapDispatchToProps = dispatch => ({
//     updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
// })
// export default connect(null, mapDispatchToProps)(ShopPage);

import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
