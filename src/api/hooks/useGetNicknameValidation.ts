import { useQuery } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

import { NicknameValidationResponse } from '@/types';

export const getNicknameValidationPath = (nickname: string) =>
  `/api/v1/my/nickname/validation?nickname=${nickname}`;

export const getNicknameValidation = async (nickname: string) => {
  const response = await fetchInstance.get<NicknameValidationResponse>(
    getNicknameValidationPath(nickname),
    { withCredentials: true }
  );
  return response.data;
};

export const useGetNicknameValidation = (nickname: string) => {
  return useQuery({
    queryKey: ['nicknameValidation', nickname],
    queryFn: () => getNicknameValidation(nickname),
    enabled: !!nickname,
  });
};
