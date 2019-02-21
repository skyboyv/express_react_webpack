import React, {Component} from 'react';

import {Card , List} from 'antd';
const { Meta } = Card;
import './index.css'
const data = [
    {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551180993&di=1da45e17f3d00ae45eb50fc6274d1b1b&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.daweijita.com%2F2016%2F07%2Fzhoujielun_gaobaiqiqiu_guitar.jpg',
    },
    {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550586274609&di=8738f47c4d7c3f5e1d300aa148192af6&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201408%2F26%2F20140826185231_Xa2E3.jpeg',
    },
    {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550586274606&di=665dded10a5e66f3607d010f98085279&imgtype=0&src=http%3A%2F%2Fcdn.daweijita.com%2F2015%2F09%2Fzhoujielun_huidaoguoq.jpg',
    },
    {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550586274603&di=649f1888beb36ebfb7cbe1a09fda835d&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2FtVm1TleAL7ft_GxrKjmjnQ%3D%3D%2F109951162848244069.jpg',
    },
    {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550586274598&di=8f06cab87edbc51d9c992f54df09e891&imgtype=0&src=http%3A%2F%2Fcdn.daweijita.com%2F2018%2F04%2Fzhoujielun_daoxiang_guitar.jpg',
    },
    {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550586274593&di=4fc76e12b4b366b034930d93b69b37da&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fcrawl%2F20151014%2F6Prh-fxirmpz8327913.jpg',
    },
];
class index extends Component {
    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <div className={"cardDiv"}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img style={{width:240,height:150}} src={item.imgUrl}/>}
                            >
                                <Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                        </div>
                    </List.Item>
                )}
           />

        )
    }
}

export default index;
