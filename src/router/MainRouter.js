import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';
import { ProtectedRoute } from './ProtectedRoute';
import RouterPath from "./RouterPath";
import Routes from './Routes';
import Menu from 'shared/components/menu/Menu';
import Topbar from 'shared/components/topbar/Topbar';

const Layout = ({ layout: LayoutComponent, routes }) => {
    const paths = routes.map(x => (x.path));
    // const paths_ = ["/", "/cate"];

    const layout = <LayoutComponent children={<Switch>
        {

            routes.map((route, index) => {

                route.path = RouterPath[route.id] ?? '';

                return route?.guards?.length > 0 ? <ProtectedRoute
                    key={index}
                    path={route.path}
                    route={route}
                >
                    {route.component}
                </ProtectedRoute > : <CustomRoute
                    key={index}
                    path={route.path}
                    route={route}>
                    {route.component}
                </CustomRoute>
            })
        }
    </Switch>} />;

    return <Route path={paths} exact children={layout} />
}

function MainRouter(props) {

    const title_topbar = {};
    [...Routes].reduce((total, value) => (total.concat(value.routes)), []).map(x =>
    {
        
        let r = RouterPath[x.id].indexOf("/:") > 0 ? RouterPath[x.id].slice(0, RouterPath[x.id].indexOf("/:")) : RouterPath[x.id];
        
        title_topbar[r] = x.title
    })

    return (
        <Router>
            <div className='wrrap' id='main_page'>
                <div className='left_main'>
                    <Menu />

                </div>
                <div className='right_main'>
                    <Topbar title_topbar={title_topbar}/>
                    {/* <div className='content'> */}
                        <Suspense fallback={<div>Loading</div>}>
                            <Route path={[...Routes].reduce((total, value) => (total.concat(value.routes)), []).map(x =>
                                RouterPath[x.id])} >
                                {Routes.map((x, i) => <Layout key={i} {...x} />)}
                            </Route>
                        </Suspense>
                    {/* </div> */}
                </div>
            </div>
        </Router>
    )
}
export default MainRouter;