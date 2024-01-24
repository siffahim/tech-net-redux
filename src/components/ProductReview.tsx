import {
  useGetCommentQuery,
  usePostCommentMutation,
} from '@/redux/features/product/productApi';
import { FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function ProductReview({ id }: { id: string }) {
  const [inputValue, setInputValue] = useState<string>('');
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputValue);
    const options = {
      id: id,
      data: { comment: inputValue },
    };
    postComment(options);

    setInputValue('');
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form onSubmit={handleSubmit} className="flex gap-5 items-center">
        <Textarea
          className="min-h-[30px]"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments.map((comment, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
