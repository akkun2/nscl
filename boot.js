/*
 * NoScript Commons Library
 * Reusable building blocks for cross-browser security/privacy WebExtensions.
 * Copyright (C) 2020-2023 Giorgio Maone <https://maone.net>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use strict";
try {
  let BASE = "";
  self.include = src => Array.isArray(src) ? importScripts(...src) : importScripts(src);

  let includeFrom = (dir, srcs) =>  include(srcs.map(name => `${BASE}/${dir}/${name}.js`));

  includeFrom("lib", [
    "browser-polyfill", "punycode", "sha256"
  ]);

  includeFrom("common", [
    "UA", "uuid", "log", "locale",
    "tld", "Messages",
    "CSP", "CapsCSP", "NetCSP",
    "RequestKey", "Sites", "Permissions", "Policy",
    "Storage",
  ]);

  includeFrom("service", [
    "TabCache"
  ]);
} catch (e) {
  console.error(e);
}
