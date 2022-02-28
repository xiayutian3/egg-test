create database egg_article;
use egg_article;

create table article(
  id int(10) not null auto_increment primary key comment 'id',
  img text default null comment '缩略图',
  title varchar(255) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间'
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(img,title,summary,content,createTime)
values(
  'https://bpic.588ku.com/element_pic/20/07/01/05fc374082ba84760c4242c7a3678b61.jpg!/fw/150/quality/90/unsharp/true/compress/true',
  'helli kkk2',
  '小山峰0',
  '放宽了地方HIK',
  '2022-2-27 10:20:20'
);