import Responsive from '../Components/common/Responsive';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { list, write } from '../reducers/comment.js';

const Comment = () => {
	const [content, setContent] = useState('');
	const dispatch = useDispatch();
	const List = useSelector((state) => state.comment.list);

	const handleChange = (e) => {
		setContent(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(write(content));
	};

	useEffect(() => {
		if (List.length === 0) {
			dispatch(list());
		}
	}, [List]);

	const init = () => {
		return List.map((v, k) => {
			return (
				<ul key={k}>
					<li>댓글 번호 : {v.id}</li>
					<li>작성자 : {v.User.nickname}</li>
					<li>댓글 내용 : {v.content}</li>
				</ul>
			);
		});
	};

	return (
		<Responsive>
			<h1>댓글 리스트</h1>
			<ul>
				<li>
					<form onSubmit={onSubmit}>
						<input onChange={handleChange} type="text" />
						<input type="submit" value="작성하기" />
					</form>
				</li>
				<li>{init()}</li>
			</ul>
		</Responsive>
	);
};

export default Comment;
