import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/loader/loader';
import cls from './pageLoader.module.scss';

interface PageLoaderProps{
    className?:string
}
export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
