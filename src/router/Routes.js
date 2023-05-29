
import HomePage from "pages/home/HomePage";

import MainLayout from "shared/components/layout/MainLayout";
import { AdminGuard } from "./guards/AdminGuard";
import { GuestGuard } from "./guards/AdminGuard";
import Nhacungcap from "pages/nhacungcap/Supplier";
import Detailsupplierr from "pages/nhacungcap/detailsupplier";
import ADDSupplier from "pages/nhacungcap/Addsupplier";

const Routes = [
    {
        layout: MainLayout,
        routes: [
           {
                id: 'editncc',
                title: 'Chỉnh sửa nhà cung cấp',
                recod:1,
                guards: [AdminGuard],
                component: <ADDSupplier />,
                fallback: () =>
                {
                    return null;
                }
            },{
                id: 'addncc',
                title: 'Tạo mới nhà cung cấp',
                recod:1,
                guards: [AdminGuard],
                component: <ADDSupplier />,
                fallback: () =>
                {
                    return null;
                }
            },
            {
                id: 'detail',
                title: 'Chi tiết thông tin',
                recod:1,
                guards: [AdminGuard],
                component: <Detailsupplierr />,
                fallback: () =>
                {
                    return null;
                }
            },
            {
                id: 'nhacungcap',
                title: 'Danh sách NCC',
                recod:0,
                guards: [AdminGuard],
                component: <Nhacungcap />,
                fallback: () =>
                {
                    return null;
                }
            },{
                id: 'HOME',
                guards: [AdminGuard],
                // path: "/",
                component: <HomePage routes={[]} />,
                fallback: () =>
                {
                    return null;
                },

            },

        ]
    },
];

export default Routes