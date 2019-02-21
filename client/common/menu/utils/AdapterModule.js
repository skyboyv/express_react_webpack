import sys0001 from '../../../page/sys0001/sys0001';
import sys0002 from '../../../page/sys0002/sys0002';
import sys0003 from '../../../page/sys0003/sys0003';

export default (PageUrl) =>{
    if(PageUrl === "sys0001"){
        return sys0001;
    }
    if(PageUrl === "sys0002"){
        return sys0002;
    }
    if(PageUrl === "sys0003"){
        return sys0003;
    }
}
