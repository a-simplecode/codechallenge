/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React, { useRef, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "react-query";
import { getArticle } from "./ArticleSlice";
import ArticleTemplate from "templates/articlesTemplate/ArticlesTemplate";
import { ArticleModel } from "./ArticleServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ENCRYPTION_ENUM from "utilities/encryption/encryptionEnum";

const Article: React.FC = () => {
  /**
   * Hooks
   */
  const dispatch = useAppDispatch();
  // const articlesData = useAppSelector((state) => state.article.value.data.response.docs);
  const articlesData = useAppSelector((state) => []);

  /**
   * References
   */
  const componentIsMounted = useRef(false);

  /**
   * View did mount / View did un-mount
   */
  useFocusEffect(
    React.useCallback(() => {
      // View did mount
      componentIsMounted.current = true;
      return () => {
        // View did un-mount
        componentIsMounted.current = false;
      };
    }, []),
  );

  const [page, setPage] = useState(1);

  const [articles, setArticles] = useState<ArticleModel[]>([]);

  const loadMoreData = async () => {
    if (page < 2) setPage(page + 1);
  };

  const { status, refetch } = useQuery(
    ["data", page],
    async () => {
      const token = await AsyncStorage.getItem(ENCRYPTION_ENUM.access_token);
      if (token !== null) {
        return await dispatch(getArticle(page));
      }
    },
    {
      onError: (error: number) => {
        // eslint-disable-next-line no-console
        console.log("error", error);
      },
    },
  );

  useEffect(() => {
    setArticles((previousData): ArticleModel[] => {
      return [...previousData, ...articlesData];
    });
  }, [articlesData]);

  /**
   * Render UI
   */
  return <ArticleTemplate data={articles} loadMoreData={loadMoreData} status={status} refetch={refetch} />;
};

export default Article;