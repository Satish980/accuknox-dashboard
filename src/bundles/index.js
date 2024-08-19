// composing redux bundle
import { composeBundles } from "redux-bundler";
import categoryBundle from './categoryBundle';

export default composeBundles(categoryBundle);
