import React, {Component} from 'react'

import {Button, Input , Table} from 'antd';
import './sys0001.css'
import axios from "axios";
const Search = Input.Search;
const columns = [{
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
}, {
    title: '用户名称',
    dataIndex: 'USERNAME',
    key: 'USERNAME',
}, {
    title: '用户账号',
    dataIndex: 'USERNO',
    key: 'USERNO',
}, {
    title: '用户邮箱',
    dataIndex: 'EMAIL',
    key: 'EMAIL',
}, {
    title: '创建时间',
    dataIndex: 'CREATEDATE',
    key: 'CREATEDATE',
}];

class sys0001 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            data: null
        };
    }

    componentWillMount() {
        let self = this;
        axios.post('/findUserList').then(function (result) {
            self.setState({
                data: result.data.data
            })
        });
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    render() {
        const {selectedRowKeys} = this.state.selectedRowKeys;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({selectedRowKeys: newSelectedRowKeys});
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({selectedRowKeys: newSelectedRowKeys});
                },
            }],
            onSelection: this.onSelection,
        };
        return (
            <div>
                <div>
                    <span>用户名：</span><Input placeholder="default size" />
                    <span>ID：</span><Input placeholder="default size" />
                    <span>Email：</span><Input placeholder="default size" />
                </div>
                <Table rowKey={record => record.ID} rowSelection={rowSelection} columns={columns} dataSource={this.state.data}/>
            </div>
        );
    }
}

export default sys0001;
// module.export = sys0001;
