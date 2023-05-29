const prefix = "/";
export default class RouterPath
{
    
    static HOME = prefix + '';
    static LOGIN = '/login';
    static nhacungcap = '/nhacungcap/danhsachncc';
    static detail = '/nhacungcap/danhsachncc/chitietnhacungcap/:id';
    static addncc = '/nhacungcap/themnhacungcap';
    static editncc = '/nhacungcap/danhsachncc/chinhsuancc/:id';
    static getRouteWithId(path, id)
    {
        return path.replace(":id", id)
    }
}