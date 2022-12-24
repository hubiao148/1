/*
 * @Author: hcy
 * @Date: 2022-10-21 09:57:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-08 21:02:11
 * @FilePath: \src\src\pages\AskQuestion\index.tsx
 * @Description: 提问题
 * 
 */

import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'
import { Breadcrumb, Input, Modal } from 'antd'
import Editor from './components/Eidtor'
import style from './index.less'
import TagAdd from './components/TagAdd'
import { msg } from '@/jotai'
import { Tags } from '@/jotai'
import { useAtom } from 'jotai'
import { addArticle } from '@/api/myShare/addArticle'

export default function index() {
  const [text] = useAtom(msg);
  const [tags] = useAtom(Tags);
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    history.push('/myshare');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addArticleClick = () => {
    console.log(text)
    console.log(tags)
    addArticle({title:'测试',content:text,userId:1}).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <div className={style.container}>
      <Modal title="提示" okText={'确定'} keyboard={true} cancelText={'取消'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>未保存要离开吗？</p>
      </Modal>
      <div>
        <div onClick={showModal}>技术问答</div>
        <div>提问题</div>
        <div onClick={addArticleClick}><span>发布问题</span></div>
      </div>
      <div>
        <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
          <Breadcrumb.Item onClick={showModal}>技术问答</Breadcrumb.Item>
          <Breadcrumb.Item>提问</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div> <Input placeholder="请输入标题用问号结尾。" /></div>
      <div><TagAdd></TagAdd></div>
      <div className={style.editor}><Editor></Editor></div>
    </div>
  )
}
