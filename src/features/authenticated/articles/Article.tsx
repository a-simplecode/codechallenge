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
  const articlesData = useAppSelector((state) => state.article.value.data.response.docs);

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
  const [search, setSearch] = useState("");

  const [articles, setArticles] = useState<ArticleModel[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<ArticleModel[]>([]);

  const loadMoreData = () => {
    if (page < 2) setPage(page + 1);
  };

  const searchData = async (s: string) => {
    setSearch(s);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem(ENCRYPTION_ENUM.access_token);
      if (token !== null) {
        await dispatch(getArticle(page));
      }
    };
    fetchData();
  }, [dispatch, page]);

  useEffect(() => {
    setArticles((previousData): ArticleModel[] => {
      return [...previousData, ...articlesData];
    });
  }, [articlesData]);

  useEffect(() => {
    setFilteredArticles((): ArticleModel[] => {
      return search
        ? articles.filter(
            (data) =>
              data.headline?.main?.toLowerCase().includes(search.toLowerCase()) ||
              data.abstract.toLowerCase().includes(search.toLowerCase()),
          )
        : articles;
    });
  }, [articles, search]);

  /**
   * Render UI
   */
  return (
    <ArticleTemplate
      data={filteredArticles}
      loadMoreData={loadMoreData}
      searchData={searchData}
      status={"success"}
      refetch={() => {
        return {};
      }}
    />
  );
};

export default Article;
